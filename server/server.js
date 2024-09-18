const express = require('express');
const path = require('path');

// Import routes
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Use html routes
app.use('/', htmlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
