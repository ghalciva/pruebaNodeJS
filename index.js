const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 5000;

var exphbs = require('express-handlebars');
var fortune = require('./lib/fortune');
var app = express();

app.engine('handlebars', 
           exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

//add modules routers
var routes = require('./routes/index.js');
var users = require('./routes/users.js');

//body.parse
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/process', function(req,res){
    console.log('formulario:'+req.query.form);
    console.log('nombre'+req.body.name);
    console.log('email'+req.body.email);
});


//archivos estaticos
app.use(express.static(path.join(__dirname,'/public')));

//call routers
app.use('/',routes);
app.use('/users',users);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


    