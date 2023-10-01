import React, { useContext,useState } from "react";
import Note from "./Note";
import NoteContext from "../context/notes/noteContext";

function AddNote(props) {
    const context=useContext(NoteContext)
    const {addNote}= context
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const {showAlert} = props
    const handleClick = (e)=>{
        e.preventDefault(); // to prevent reload
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Success","Added note successfully")
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
                    <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value= {note.tag} onChange={onChange} />
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            <Note showAlert={showAlert}/>
        </div>
  );
}

export default AddNote;
