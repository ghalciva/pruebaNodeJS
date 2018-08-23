const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 5000;

var exphbs = require('express-handlebars');

var app=express();

app.engine('handlebars', 
           exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

//home ruta
app.get('/', (req, res) => res.render('home'));

//login ruta
app.get('/login', (req, res) => res.render('login',{csrf: 'abc'}));

//body.parse
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/process', function(req,res){
    console.log('formulario:'+req.query.form);
    console.log('nombre'+req.body.name);
    console.log('email'+req.body.email);
});

var fortune = require('./lib/fortune');

app.get('/about',(req,res)=>
  res.render('about', { fortune: fortune.getFortune() })
);

//archivos estaticos
app.use(express.static(path.join(__dirname,'/public')));


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


    