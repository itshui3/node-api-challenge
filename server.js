//dependencies
const express = require('express');
const apiRouter = require('./api/apiRouter.js');
//build
const server = express();
//configs and server middleware
server.use(express.json());

const cors = require('cors');
server.use(cors());

const helmet = require('helmet');
server.use(helmet());

const dexter = require('morgan');
server.use(dexter());

server.use('/api', apiRouter);

// 404 fallback

server.use((req, res, res) => {
  res.status(404).json({ message: `404 resource not found on server`})
})

module.exports = server;