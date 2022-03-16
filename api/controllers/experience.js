const express = require('express');
const router = express.Router();
const db = require('../models');
const { Experience } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /layouts
//    POST   /layouts
//    GET    /layouts/:id
//    PUT    /layouts/:id
//    DELETE /layouts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Experience.findOne({
    order: [['id', 'desc']]
  })
    .then(experience => res.json(experience));
});


router.post('/', (req, res) => {
  var header  = req.body.header;
  var description  = req.body.description;
  
  Experience.create({ header, description })
    .then(experience => {
      res.status(201).json(experience);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Experience.findByPk(id)
    .then(experience => {
      if(!experience) {
        return res.sendStatus(404);
      }

      res.json(experience);
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
  Experience.findByPk(id)
    .then(experience=> {
      if(!experience) {
        return res.sendStatus(404);
      }

      experience.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;