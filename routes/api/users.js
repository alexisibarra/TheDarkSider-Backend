const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if (user) {

    if (!user.email) {
      next({ status: 422, message: { email: 'is required' } })
    }

    if (!user.password) {
      next({ status: 422, message: { password: 'is required' } })
    }

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() }))
      .catch(err => {
        if (/duplicate/i.test(err.errmsg)) {
          next({ message: 'Email is already registered' })
        }

        next({ message: 'Operation could not be completed, please try again' })
      });
  }

  next({ message: "User information must be provided" })
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      const usera = passportUser;
      usera.token = passportUser.generateJWT();

      return res.json({ user: usera.toAuthJSON() });
    }

    return res.status(422).json({
      errors: info,
    });
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;