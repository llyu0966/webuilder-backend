const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models');
const { About } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /about
//    POST   /about
//    GET    /about/:id
//    PUT    /about/:id
//    DELETE /about/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req, res) => {
    About.findAll({})
        .then(about => res.json(about));
});

// to store the content of aboutMe
router.post('/', (req, res) => {
    // collected content from a user
    let { content } = req.body;

    About.create({ content })
        .then(about => {
            res.status(201).json(about);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    About.findByPk(id)
        .then(about => {
            if (!about) {
                return res.sendStatus(404);
            }

            res.json(about);
        });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    About.findByPk(id)
        .then(about => {
            if (!about) {
                return res.sendStatus(404);
            }

            about.content = req.body.content;
            about.save()
                .then(about => {
                    res.json(about);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    About.findByPk(id)
        .then(about => {
            if (!about) {
                return res.sendStatus(404);
            }

            about.destroy();
            res.sendStatus(204);
        });
});


module.exports = router;