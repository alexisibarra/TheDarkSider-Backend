const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) =>
      (!user || !user.validatePassword(password))
        ? done(null, false, { errors: { 'email or password': 'is invalid' } })
        : done(null, user)
    ).catch(done);
}));