const router = require('express').Router();
const User = require('../models/user');
const Session = require('../models/session');

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/sessions routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

// login
router.post('/', (req, res, next) => {
  // @todo security issue
  return User.findOne({ where: {
    email: req.body.email,
    password: req.body.password
  }})
  .then(user => {
    if(!user) {
      var err = new Error('Unauthorized');
      err.status = 401;
      throw err;
    }
    return Session.add(user.id)
  })
  .then(sessionId => {
    res.cookie('sessionId', sessionId);
    res.json({});
  })
  .catch(next)
})






