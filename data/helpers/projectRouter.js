// dependencies
const express = require('express');
const projDb = require('./projectModel');
const actionDb = require('./actionRouter');
// build
const router = express.Router();
// middleware

// routes

// 404 projectRouter fallback
router.use((req, res) => {
  res.status(404).json({ message: `404 /api/projects/ resource not found`})
})
module.exports = router;