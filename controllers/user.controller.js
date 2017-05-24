var User = require('../models/User.model');

exports.register = function(req, res) {
  var newUser = new User();

  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  newUser.save(function(err, user) {
    if(err) {
      console.log(err.messsage);
      console.log(err.errors.username.message);
      res.send('error registering user');
    }
    console.log(user);
    res.redirect('/signup.html') 
  })
}
