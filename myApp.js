var express = require('express');

var app = express();



app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req,res) =>{
    
    res.render('first_view', {
        name : 'sikiii',
        desc : 'verynice'
    });

} );

app.listen(3000);