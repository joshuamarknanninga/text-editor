const path = require('path');
const router = require('express').Router();
const htmlController = require('../controllers/htmlController');

// Serve the index.html file for the root and catch-all routes
router.get('*', htmlController.getIndex);

module.exports = router;
