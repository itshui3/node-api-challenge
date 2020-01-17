// dependencies
const express = require('express');
const router = express.Router();

//routers
const actionRouter = require('./data/helpers/actionRouter');
const projectRouter = require('./data/helpers/projectRouter');

router.use('/actions', actionRouter);
router.use('/projects', projectRouter);

module.exports = router;