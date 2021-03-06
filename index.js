
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
 

//   .get('/', (req, res) => res.send('DONE'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))






//const express = require('express')
const PORT = process.env.PORT || 5000
///var port = process.env.PORT || 8000

//var app = express();



// app.get('/', function(req,res){
// res.send('I want a pizza right now!');
// });

//app.listen(PORT);


 var express = require('express');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var multer = require('multer');
var bodyParser = require('body-parser');
var jade = require('jade');

var upload = multer();
var app = express();

// app.listen(process.env.PORT || 5000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

// app.get('/', function(req, res){
//     res.send('hello world');
// });


app.set('view engine', 'pug');

app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(upload.array());

app.use(cookieParser());
app.use(session({
    secret: 'shit',
    name: 'shit',
    // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


var routers = require('./routes/routers.js');

app.use('/',routers);



app.listen(PORT, function() {
    console.log("App is running on port " + PORT);
});