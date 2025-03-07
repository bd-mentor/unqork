const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the API in Express!' });
});

module.exports = app;
