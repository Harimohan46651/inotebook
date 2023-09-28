const express = require('express');
const router = express.Router();
const fetchUser= require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator')

// ROUTE1:get all notes fo a user using GET: /api/notes/fetchallnotes login required
router.get('/fetchallnotes',fetchUser, async (req, res)=>{
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error)
        res.status(500).send('internal server error')
    }
    
} )

// ROUTE2: Addnotes for a user using POST:/api/notes/addnote  Login required
router.post('/addnote',fetchUser,[body('title').isLength({ min: 5 }),
body('description').isLength({ min: 5 })
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // this error will be send if we give wrong vlaue for any field
    }
    try {
        const {title, description, tag}= req.body
        const note= new Note({
            user: req.user.id,
            title:title,
            description:description,
            tag:tag
        })
        const savedNote = await note.save()
        res.send(savedNote)

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error', error)
    }

})

module.exports = router