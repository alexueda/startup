import express from 'express';

const app = express();
const port = 4000;

let rooms = {};

app.use(express.json());

app.post('/api/room/create', (req, res) => {
  const { roomNumber, password } = req.body;

  if (!roomNumber || !password) {
    return res.status(400).send({ msg: 'Room number and password are required.' });
  }

  if (rooms[roomNumber]) {
    return res.status(409).send({ msg: 'Room already exists.' });
  }

  rooms[roomNumber] = { password, tasks: [] };
  res.status(201).send({ msg: 'Room created successfully!' });
});

app.post('/api/room/login', (req, res) => {
  const { roomNumber, password } = req.body;

  if (!roomNumber || !password) {
    return res.status(400).send({ msg: 'Room number and password are required.' });
  }

  const room = rooms[roomNumber];
  if (!room) {
    return res.status(404).send({ msg: 'Room not found.' });
  }

  if (room.password !== password) {
    return res.status(403).send({ msg: 'Incorrect password.' });
  }

  res.status(200).send({ msg: 'Login successful.' });
});

// Get tasks for a specific room
app.get('/api/room/:roomNumber/tasks', (req, res) => {
  const room = rooms[req.params.roomNumber];

  if (!room) {
    return res.status(404).send({ msg: 'Room not found.' });
  }

  res.status(200).send({ tasks: room.tasks });
});

app.post('/api/room/:roomNumber/tasks', (req, res) => {
  const room = rooms[req.params.roomNumber];

  if (!room) {
    return res.status(404).send({ msg: 'Room not found.' });
  }

  const { content, person, date } = req.body;

  if (!content || !person || !date) {
    return res.status(400).send({ msg: 'Task content, person, and date are required.' });
  }

  room.tasks.push({ content, person, date, complete: false });
  res.status(201).send({ tasks: room.tasks });
});

app.use((req, res) => {
  res.status(404).send({ msg: 'Endpoint not found.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});