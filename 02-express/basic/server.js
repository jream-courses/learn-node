const express = require('express');

const app = express();
const PORT = 3300;

// Example Get Request (No Args)
// req / request = what you receive from browser/api call
// res / response = what you return back
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Example Get Request (No Args)
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Example: Query String (Query)
// ?name=Todd
app.get('/name', (req, res) => {
  const { name } = req.query;
  res.send(`About Page: ${name}`);
});

// Example: Parameter URL (Params)
// /name/Betty
app.get('/name/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Param Page: ${name}`);
});


app.listen(PORT, () => {
  console.log(`Express running at: http://localhost:${PORT}`);
});
