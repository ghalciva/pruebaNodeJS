var express = require('express');
var router = express.Router();
var fortune = require('../lib/fortune.js');

//home ruta
router.get('/', (req, res) => res.render('home'));

//login ruta
router.get('/login', (req, res) => res.render('login',{csrf: 'abc'})); 

router.get('/about',(req,res)=>
  res.render('about', { fortune: fortune.getFortune() })
);

module.exports = router; 