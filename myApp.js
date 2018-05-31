//import dependies
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
var upload = multer();

//get request rendering form (PUG)
app.get('/', (req,res) => {

    res.render('form');

});

//setting engine to pug
app.set('view engine','pug');
app.set('views', './views');

//form data parsing in JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/',(req,res) => {
    console.log(req.body);
    res.send("recieved your request!");
 });
 app.listen(3000);