'use strict';

const express = require('express');
const router  = express.Router();

const nucontController = require('../controllers/nucontController');

router.get('/', nucontController.status);

router.post('/doIt/one', nucontController.levelOne);

router.post('/doIt/two', nucontController.levelTwo);

router.post('/doIt/three', nucontController.levelThree);

router.post('/doIt/four', nucontController.levelFour);

router.post('/doIt/save', nucontController.saveBalance);

module.exports = router;
