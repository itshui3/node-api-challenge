// dependencies
const express = require('express');
const projDb = require('./projectModel');
const actionDb = require('./actionRouter');
// build
const router = express.Router();
// middleware

// routes
// projDb.get(id)
router.get('/:id', (req, res) => {
  const id = req.params.id;
  projDb.get(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully fetched resource`, project: resou})
    })
    .catch( err => {
      console.log(err)
      res.status(500).json({ message: `status 500: Internal server error, could not fetch resource`})
    })
})

// projDb.insert(project)
router.post('/', (req, res) => {
  const newProject = req.body;
  projDb.insert(newProject)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully added resource`, resource: resou})
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, coudl not add resource`})
    })
})

// projDb.update(id, changes)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedProj = req.body;
  projDb.update(id, updatedProj)
    .then( resou => {
      res.status(200).json({ message: `status 200: updated resource`, resource: resou})
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, cuold not update resource`})
    })
})

// projDb.remove(id)
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  projDb.remove(id)
    .then( resou => {
      res.status(204).json({ message: `status 200: resource successfully removed` })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not remove resource`})
    })
})

// projDb.getProjectActions(projId)
router.get('/:id/projectActions', (req, res) => {
  const id = req.params.id;
  projDb.getProjectActions(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully fetched resource`, project_actions: resou})
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch resource` })
    })
})

// 404 projectRouter fallback
router.use((req, res) => {
  res.status(404).json({ message: `404 /api/projects/ resource not found`})
})
module.exports = router;