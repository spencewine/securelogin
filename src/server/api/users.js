const router = require('express').Router();
const User = require('../models/user');
const Session = require('../models/session');
const bcrypt = require ('bcrypt-nodejs')

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/users routes');
  // you can use this for custom middleware
  next();
});





// signup
router.post('/', (req, res, next) => {
  console.log("HELLO< I'm HERE")
  console.log(req.body.password)
  bcrypt.genSalt(4, function(err, salt){
       bcrypt.hash(req.body.password, salt, null, function(err, hash){
         console.log("HASH IS HERE,",hash)
         return User.create({
           email: req.body.email,
           password: hash
         })
           .then(user => Session.add(user.id))
           .then(sessionId => {
             res.cookie('sessionId', sessionId);
             res.json({});
           })
           .catch(next);
       })

      })

  })
  // @todo security issue


router.get('/', (req, res, next) => {
  return User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});
