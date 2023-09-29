import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
function Note() {
    const context= useContext(NoteContext)
    const {notes,setnotes} = context
    return (
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
    )
}

export default Note
