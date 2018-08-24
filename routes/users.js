var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

//select * from usuarios
router.get('/',function(req,res){
    knex('usuarios').select().then( objCollectUsers => { res.render('user/index', {objUsers: objCollectUsers});
    });
});

module.exports = router;