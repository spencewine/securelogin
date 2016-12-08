const router = require('express').Router();
const User = require('../models/user');

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/users routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

router.get('/', (req, res, next) => {
  return User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

