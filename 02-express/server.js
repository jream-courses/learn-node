const express = require('express');

const app = express();
const port = 3200;

app.get('/', (req, res) => {
  res.status(200).send('Express Server Loaded!');
});

app.get('/about', (req, res) => {
  res.status(200).send('This is the about page.');
});

app.listen(port, () => {
  console.log(`Running Express at: http://localhost:${port}`);
});
