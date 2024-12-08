import express from 'express';
import { usersCollection } from './database.js';

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/room/create', async (req, res) => {
  const { roomNumber, password } = req.body;

  if (!roomNumber || !password) {
    return res.status(400).send({ msg: 'Room number and password are required.' });
  }

  try {
    const existingRoom = await usersCollection().findOne({ roomNumber });
    if (existingRoom) {
      return res.status(409).send({ msg: 'Room already exists.' });
    }

    await usersCollection().insertOne({ roomNumber, password, tasks: [] });
    res.status(201).send({ msg: 'Room created successfully!' });
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).send({ msg: 'Internal server error.' });
  }
});

apiRouter.post('/room/login', async (req, res) => {
  const { roomNumber, password } = req.body;

  if (!roomNumber || !password) {
    return res.status(400).send({ msg: 'Room number and password are required.' });
  }

  try {
    const room = await usersCollection().findOne({ roomNumber });
    if (!room) {
      return res.status(404).send({ msg: 'Room not found.' });
    }

    if (room.password !== password) {
      return res.status(403).send({ msg: 'Incorrect password.' });
    }

    res.status(200).send({ msg: 'Login successful.' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send({ msg: 'Internal server error.' });
  }
});

apiRouter.get('/room/:roomNumber/tasks', async (req, res) => {
  const { roomNumber } = req.params;

  try {
    const room = await usersCollection().findOne({ roomNumber });
    if (!room) {
      return res.status(404).send({ msg: 'Room not found.' });
    }

    res.status(200).send({ tasks: room.tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send({ msg: 'Internal server error.' });
  }
});

apiRouter.post('/room/:roomNumber/tasks', async (req, res) => {
  const { roomNumber } = req.params;
  const { content, person, date } = req.body;

  if (!content || !person || !date) {
    return res.status(400).send({ msg: 'Task content, person, and date are required.' });
  }

  try {
    const room = await usersCollection().findOne({ roomNumber });
    if (!room) {
      return res.status(404).send({ msg: 'Room not found.' });
    }

    const newTask = { content, person, date, complete: false };
    await usersCollection().updateOne(
      { roomNumber },
      { $push: { tasks: newTask } }
    );

    const updatedRoom = await usersCollection().findOne({ roomNumber });
    res.status(201).send({ tasks: updatedRoom.tasks });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).send({ msg: 'Internal server error.' });
  }
});

app.use((req, res) => {
  res.status(404).send({ msg: 'Endpoint not found.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});