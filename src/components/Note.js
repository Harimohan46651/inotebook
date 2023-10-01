import React, { useContext, useEffect, useRef, useState} from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import { useNavigate } from 'react-router-dom'
function Note(props) {
    const context= useContext(NoteContext)
    const {notes,getAllNotes,editNote} = context
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(localStorage)
        if(localStorage.getItem('token'))
        {
            getAllNotes()
        }
        else{
            navigate('/login');
        }
        
    }, [])
    const ref = useRef(null)
    const refClose= useRef()
    const {showAlert} = props
    const [note, setNote] = useState({id:"",etitle: "", edescription: "", etag: "default"})
    const updateNote = (currentNote)=>{
        ref.current.click()
        setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description,etag:currentNote.tag})
        showAlert("Success","Note updated")
    }
    const handleClick = (e)=>{
        editNote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click()
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})    // it means whatever change will be target that will be update here
    }
    return (
        <>
            <button type="button" className="btn btn-primary d-none" ref={ref}data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>update Note</button>
                </div>
                </div>
            </div>
            </div>
            <div className="row my-3">
                <h2>You Notes</h2> 
                {notes.map((note)=>{
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={showAlert} />  
                })}
            </div>
        </>
    )
}

export default Note;
