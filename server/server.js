const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Serve manifest.json from the client directory
app.use('/manifest.json', express.static(path.join(__dirname, '../client/manifest.json')));

// Serve icons from the client directory
app.use('/assets/icons', express.static(path.join(__dirname, '../client/assets/icons')));

// All other routes return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
