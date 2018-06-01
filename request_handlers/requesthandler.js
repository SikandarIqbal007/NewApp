
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.use(cookieParser());
app.use(session({
    secret: 'shit',
    name: 'shit',
    // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));





var Users = [];




// request handler to handle get request to render signin page
exports.landingPage = (req,res) => {

    res.render('login',{
        message: 'LOGIN KR MAAMEY'
        
    });

};

// request handler to handle get request to load signup page
exports.signupPage = (req,res) => {
    res.render('signup',{
        message: 'PLEASE SIGNUP FUCKING'
        
    });
};


// request handler to handle POST request to signup page
exports.signupPost = function(req, res){
    console.log('shit');
    if(!req.body.id || !req.body.password){
       res.status("400");
       res.send("Invalid details!");
    } else {
       Users.filter(function(user){
          if(user.id === req.body.id){
             res.render('signup', {
                message: "User Already Exists! Login or choose another user id"});
          }
       });
       var newUser = {id: req.body.id, password: req.body.password};
       Users.push(newUser);
       req.session.user = newUser;
       console.log('user session on : '+req.session.user.id);
       res.redirect('/protected_page');
    }
 }

//loading homePage after logging in

exports. checkSignIn = function(req, res, next){
    if(req.session.user){
       next();     //If session exists, proceed to page
    } else {
       var err = new Error("Not logged in!");
       console.log(req.session.user);
       next(err);  //Error, trying to access unauthorized page!
    }
 }
exports.loadHome =  function(req,res){
    //load home page
    res.render('protected_page',{
        id: req.session.user.id
    });
}

// Request handler for signin POST
exports.signInPost = function(req,res){

    if(!req.body.id || !req.body.password){
        //Credentials are not added
        console.log('enter full detail');
        res.render('/login',{
            message: 'Enter full detail'
        });
    } else { 
        //loop thru array using filter method
        Users.filter(function(user){
                if(req.body.id == user.id && req.body.password == user.password){
                   res.render('protected_page', {
                       id: req.body.id
                   }); 
                   //assigning session to this user
                   req.session.user = user;
                }
        });
        //if above conditions fails load login page with error
        res.render('login',{
            message: 'Wrong credentials'
        })

    }

}

exports.logoutFunc = (req,res) => {
    req.session.destroy(function(){
        console.log('user logged out');
    });
    res.render('login',{
        message: 'LOGIN KRO'
    });
} 


exports.Err = function(err,req,res,next){
    console.log(err);
    res.redirect('/login');

};