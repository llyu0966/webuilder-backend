const express = require('express');
const router = express.Router();
const db = require('../models');
const { Layout } = db;

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
  Layout.findAll({})
    .then(layouts => res.json(layouts));
});


router.post('/', (req, res) => {
  let { layout } = req.body;
  
  Layout.create({ layout })
    .then(layout => {
      res.status(201).json(layout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Layout.findByPk(id)
    .then(layout => {
      if(!layout) {
        return res.sendStatus(404);
      }

      res.json(layout);
    });
});

// update the layout
router.put('/:id', (req, res) => {
  const { id } = req.params;
  Layout.findByPk(id)
    .then(layout => {
      if(!layout) {
        return res.sendStatus(404);
      }

      layout.layout = req.body.layout;
      layout.save()
        .then(layout => {
          res.json(layout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Layout.findByPk(id)
    .then(layout => {
      if(!layout) {
        return res.sendStatus(404);
      }

      layout.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;