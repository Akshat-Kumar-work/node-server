require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // fallback if not set

const test_var = process.env.test;

console.log(test_var);

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`testing for github `)
});

