var express = require('express');
var router = express.Router();
var request = require('../request_handlers/requesthandler.js');

router.get('/', request.landingPage);
router.post('/', request.signInPost);
router.get('/signup', request.signupPage);
router.post('/signup',request.signupPost);
router.get('/protected_page' , request.checkSignIn ,request.loadHome);
router.get('/logout',request.logoutFunc);
//router.get('/protected_page',request.Err);

//export this router to use in our index.js
module.exports = router;