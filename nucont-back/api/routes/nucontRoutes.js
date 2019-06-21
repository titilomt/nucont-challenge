'use strict';

const express = require('express');
const router  = express.Router();

const nucontController = require('../controllers/nucontController');

router.get('/', nucontController.status);

router.post('/doIt', nucontController.filterData);

module.exports = router;
