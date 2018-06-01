var express = require('express');
var router = express.Router();
var request = require('../request_handlers/requesthandler.js');

router.get('/', request.landingPage);
router.get('/signup', request.signupPage);

//export this router to use in our index.js
module.exports = router;