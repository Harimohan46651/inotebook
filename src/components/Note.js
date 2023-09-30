import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
function Note() {
    const context= useContext(NoteContext)
    const {notes,getAllNotes} = context
    useEffect(()=>{
        getAllNotes()
    })
    return (
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
    )
}

export default Note;
