const express = require('express');
const {renderMain} = require('../controllers/page');
const {getWeather} = require('../controllers/weather');

const router = express.Router();

router.get('/main',getWeather,renderMain);
router.get('/join',(req,res)=>{
    res.render('join');
});
router.get('/login',(req,res)=>{
    res.render('login');
});
module.exports = router;