const express = require('express');
const {renderMain} = require('../controllers/page');
const {getWeather} = require('../controllers/weather');

const router = express.Router();

router.get('/main',getWeather,renderMain);

module.exports = router;