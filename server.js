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
server.use(dexter('tiny'));

server.use('/api', apiRouter);

const rootReply = `
    <h1 class='rootStyle__h1'>Welcome to WebAPI Challenge!</h1>
    <div class='endPoints__cont'>
      <div class='actions__cont'>
        <h2>Actions</h2>
        <ul>
          <li>GET /api/actions/:id</li>
          <li>POST /api/actions/ </li>
          <li>PUT /api/actions/:id </li>
          <li>DELETE /api/actions/:id </li>
      </div>

      <div class='projects__cont'>
        <h2>Projects</h2>
        <ul>
          <li>GET /api/projects/:id</li>
          <li>POST /api/projects/</li>
          <li>PUT /api/projects/:id/</li>
          <li>DELETE /api/projects/:id/</li>
          <li>GET /api/projects/:id/actions/</li>
        </ul>
      </div>

    </div>
  `;

server.get('/', (req, res) => {
  res.status(200).send(rootReply);
});

// 404 fallback

server.use((req, res) => {
  res.status(404).json({ message: `404 resource not found on server`})
})

module.exports = server;