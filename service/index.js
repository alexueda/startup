import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
let users = {};
let rooms = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  const { email, password } = req.body;
  if (users[email]) {
    return res.status(409).send({ msg: 'User already exists' });
  }
  const user = { email, password, token: uuidv4() };
  users[email] = user;
  res.send({ token: user.token });
});

apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users[email];
  if (user && user.password === password) {
    user.token = uuidv4();
    return res.send({ token: user.token });
  }
  res.status(401).send({ msg: 'Invalid credentials' });
});

apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

apiRouter.post('/room/create', (req, res) => {
  const { token, roomName, roomPassword } = req.body;
  const user = Object.values(users).find((u) => u.token === token);

  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  if (rooms[roomName]) {
    return res.status(409).send({ msg: 'Room already exists' });
  }

  rooms[roomName] = { roomPassword, owner: user.email, members: [user.email] };
  res.send({ msg: 'Room created successfully' });
});

apiRouter.post('/room/join', (req, res) => {
  const { token, roomName, roomPassword } = req.body;
  const user = Object.values(users).find((u) => u.token === token);

  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  const room = rooms[roomName];
  if (!room) {
    return res.status(404).send({ msg: 'Room not found' });
  }

  if (room.roomPassword !== roomPassword) {
    return res.status(403).send({ msg: 'Incorrect room password' });
  }

  if (!room.members.includes(user.email)) {
    room.members.push(user.email);
  }

  res.send({ msg: `Joined room ${roomName}` });
});

apiRouter.get('/room/:roomName', (req, res) => {
  const { token } = req.query;
  const user = Object.values(users).find((u) => u.token === token);

  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  const room = rooms[req.params.roomName];
  if (!room) {
    return res.status(404).send({ msg: 'Room not found' });
  }

  res.send({
    roomName: req.params.roomName,
    owner: room.owner,
    members: room.members,
  });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
