const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

router.post('/',[body('name').isLength({ min: 5 }),
body('password').isLength({ min: 5 }),
body('email').isEmail()
], (req,res)=>
{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // this error will be send if we give wrong vlaue for any field
    }
    // const user = User.findOne({email:req.body.email})
    // if(user)
    // {
    //     return res.status(400).json({error: 'please give unique email'})
    // }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      .then(user => res.json(user))
      .catch(err=> res.json({err:'please give unique email'})) // here this catch will be used if we use duplicate value of any parameter which was declared as unique in schema
      
})

module.exports = router