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

// ROUTE3: update a note PUT: /api/notes/updatenote  :Login required
router.put('/updatenote/:id', fetchUser,async(req,res)=>{
    try {
        const {title, description, tag} = req.body
        const newNote = {}
        if(title)
        {
            newNote.title= title
        }
        if(description){
            newNote.description= description
        }
        if(tag){
            newNote.tag= tag
        }
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).send('Not Found')
        }
        if(note.user.toString() !== req.user.id)
        {
            return res.send('Not allowed')
        }
        const updatedNotes= await Note.findByIdAndUpdate(req.params.id,newNote)
        res.json(updatedNotes)
    } catch (error) {
        console.log(error)
        res.send('internal server error')   
    }
    

})

module.exports = router