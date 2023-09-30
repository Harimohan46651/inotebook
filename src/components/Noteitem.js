import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";
function Noteitem(props) {
  const note = props.note;
  const context=useContext(NoteContext)
  const {deleteNote} = context
  const handleDelete= ()=>{
     deleteNote(note._id) 
  }
  return (
    <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5><i className= "far fa-trash-alt mx-2 " onClick={handleDelete}></i>
                        <i className="far fa-edit mx-2"></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
  );
}

export default Noteitem;
