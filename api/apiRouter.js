// dependencies
const express = require('express');
const router = express.Router();

//routers
const actionRouter = require('../data/helpers/actionRouter.js');
const projectRouter = require('../data/helpers/projectRouter.js');

router.use('/actions', actionRouter);
router.use('/projects', projectRouter);

module.exports = router;