

exports.landingPage = (req,res) => {

    res.render('login',{
        message: 'LOGIN KR MAAMEY'
        
    });

};


exports.signupPage = (req,res) => {
    res.render('signup',{
        message: 'SIGNUP KR MAAMEY'
        
    });
};