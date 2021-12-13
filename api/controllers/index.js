const express = require('express');
const router = express.Router();


// Load each controller
const layoutsController = require('./layouts.js');
const aboutMeController = require('./about.js');
const educationController = require('./education.js');
const experienceController = require('./experience.js');
const projectController = require('./project.js');
const contactController = require('./contact.js');
const appConfigController = require('./appConfig.js');
const imagesController = require('./images.js');
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/layouts', layoutsController);
router.use('/about', aboutMeController);
router.use('/education', educationController);
router.use('/experience', experienceController);
router.use('/project', projectController);
router.use('/contact', contactController);
router.use('/image', imagesController);
router.use('/application-configuration', appConfigController);


module.exports = router;