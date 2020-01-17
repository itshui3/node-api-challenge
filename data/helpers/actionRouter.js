// dependencies
const express = require('express');
const projDb = require('./projectModel');
const actionDb = require('./actionModel');
// build
const router = express.Router();
// middleware

// routes
// actionDb.get(id)
router.get('/:id', (req, res) => {
  const id = req.params.id;
  actionDb.get(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: resource successfully fetched`, action: resou})
    })
    .catch( err => {
      console.log('in actions GET /:id', err)
      res.status(500).json({ message: `status 500: internal server error, could not retrieve resource`})
    })
})

// actionDb.insert(action)
router.post('/', (req, res) => {
  const newAction = req.body;
  actionDb.insert(newAction)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully added action`, resource: resou})
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not add action`})
    })
})

// actionDb.update(id, changes)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedAction = req.body;
  actionDb.update(id, updatedAction)
    .then( resou => {
      res.status(200).json({ message: `status 200: resource successfully updatd`, resource: resou})
    })
    .catch( err => {
      console.log(err)
      res.status(500).json({ message: `status 500: Internal server error, could not update resource`})
    })
})

// actionDb.remove(id)
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  actionDb.remove(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully removed action`, resource: resou})
    })
})
// 404 actionRouter fallback
router.use((req, res) => {
  res.status(404).json({ message: `404 /api/actions/ resource not found`})
})
module.exports = router;