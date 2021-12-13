const express = require('express');
const router = express.Router();
const db = require('../models');
const project = require('../models/project');
const { Project } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /project
//    POST   /project
//    GET    /project/:id
//    PUT    /project/:id
//    DELETE /project/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Project.findAll({})
    .then(project => res.json(project));
});


router.post('/', (req, res) => {
  var header  = req.body.header;
  var description  = req.body.description;
  
  Project.create({ header, description })
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Project.findByPk(id)
    .then(project => {
      if(!project) {
        return res.sendStatus(404);
      }

      res.json(project);
    });
});

/**  update 
router.put('/:id', (req, res) => {
  const { id } = req.params;
  Contact.findByPk(id)
    .then(contact => {
      if(!contact) {
        return res.sendStatus(404);
      }

      Contact.contact = req.body.contact;
      contact.save()
        .then(contact => {
          res.json(contact);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});
*/


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Project.findByPk(id)
    .then(project => {
      if(!project) {
        return res.sendStatus(404);
      }

      project.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;