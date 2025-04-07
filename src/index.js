const express = require('express');

const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

const apiRoutes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server started on -> http://localhost:${port}`);
});