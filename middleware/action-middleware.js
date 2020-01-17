const projDb = require('../data/helpers/projectModel.js')

const validateProjectId = (req, res, next) => {
  const projId = req.body.proj_id;
  projDb.get(projId)
    .then( resou => {
      console.log(resou);
      if(resou.project_id) {
        next();
      } else {
        const err = new Error('project id not found');
        err.status = 404;
        next(err);
      }
    })
    .catch( err => {
      console.log('promise catch in middleware called', err);
      // intentionally left blank to note result
    })
}

const actionMw = {
  validateProjectId
}

module.exports = actionMw;