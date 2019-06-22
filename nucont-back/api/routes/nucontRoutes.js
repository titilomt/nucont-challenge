'use strict';

const express = require('express');
const router  = express.Router();

const nucontController = require('../controllers/nucontController');

router.get('/', nucontController.status);

router.post('/doIt/one', nucontController.levelOne);

router.post('/doIt/two', nucontController.levelTwo);

router.post('/doIt/three', nucontController.levelThree);

module.exports = router;
