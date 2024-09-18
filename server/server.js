const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import routes
const htmlRoutes = require('./routes/htmlRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Use routes
app.use('/', htmlRoutes);
app.use('/', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
