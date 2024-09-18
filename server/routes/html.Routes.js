const path = require('path');
const router = require('express').Router();
const htmlController = require('../controllers/htmlController');

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Catch-all route to serve index.html for any unrecognized routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Root route
router.get('/', htmlController.getIndex);

// Catch-all route
router.get('*', htmlController.getIndex);

module.exports = router;
