console.log('shit');
 var express = require('express');
var bodyParser = require('body-parser');
 var multer = require('multer');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
// var jade = require('jade');

// var upload = multer();
 var app = express();
app.get('/', function(req, res){
    res.send('hello world');
});


// app.set('view engine', 'pug');

// app.set('views', './views');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(upload.array());

// app.use(cookieParser());
// app.use(session({
//     secret: 'shit',
//     name: 'shit',
//     // connect-mongo session store
//     proxy: true,
//     resave: true,
//     saveUninitialized: true
// }));


// var routers = require('./routes/routers.js');

// app.use('/',routers);


// app.listen(3000);
