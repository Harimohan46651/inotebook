import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState= (props)=>{
    const initialnotes=[
        {
          "_id": "651717c2c558913709cba9b7",
          "user": "65151bb430475b1f55795a55",
          "title": "my title",
          "description": "first note added",
          "tag": "general",
          "date": "2023-09-29T18:30:26.391Z",
          "__v": 0
        },
        {
            "_id": "651717c2c5589137i9cba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": "my title",
            "description": "first note added",
            "tag": "general",
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          },
          {
            "_id": "651717c2c558913709pba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": "my title",
            "description": "first note added",
            "tag": "general",
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          },
          {
            "_id": "651717c2c558913709cba8b7",
            "user": "65151bb430475b1f55795a55",
            "title": "my title",
            "description": "first note added",
            "tag": "general",
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          }
      ]
      const [notes, setNote]= useState(initialnotes)
    //   add a note
    const addNote = (title,description,tag)=>{
        const note = {
            "_id": "651717c2c558913709cba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          }
          setNote(notes.concat(note))

    }

    // delete a node
    const deleteNote= (id)=>{
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNote(newNote)
    }

    // edit  a note
    const editNote = ()=>{

    }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}} >
            {props.children}
        </NoteContext.Provider>
    )
}
 
export default NoteState