const express = require('express');
const router = express.Router();
const db = require('../models');
const { Image } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req, res) => {
    Image.findAll({})
        .then(images => res.json(images));
});


router.post('/', (req, res) => {
    let { image, type } = req.body;


    Image.create({ image, type })
        .then(image => {
            res.status(201).json(image);
        })

        .catch(err => {
            res.status(400).json(err);
        });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    Image.findByPk(id)
        .then(image => {
            if (!image) {
                return res.sendStatus(404);
            }

            res.json(image);
        });
});

router.get('/:type', (req, res) => {
    const { type } = req.params;
    Image.findByPk(type)
        .then(image => {
            if (!image) {
                return res.sendStatus(404);
            }

            res.json(image);
        });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    Image.findByPk(id)
        .then(image => {
            if (!image) {
                return res.sendStatus(404);
            }

            image.image = req.body.image;
            image.save()
                .then(image => {
                    res.json(image);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Image.findByPk(id)
        .then(image => {
            if (!image) {
                return res.sendStatus(404);
            }

            image.destroy();
            res.sendStatus(204);
        });
});


module.exports = router;