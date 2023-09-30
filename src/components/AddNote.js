import React, { useContext,useState } from "react";
import Note from "./Note";
import NoteContext from "../context/notes/noteContext";

function AddNote() {
    const context=useContext(NoteContext)
    const {addNote}= context
    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=>{  
        setNote({...note, [e.target.name]: e.target.value})    // it means whatever change will be target that will be update here
    }
  return (
    <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            <Note/>
        </div>
  );
}

export default AddNote;
