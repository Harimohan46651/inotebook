import React from "react";

function Noteitem(props) {
  const note = props.note;
  return (
    <div className="col my-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
          <i class="fa-sharp fa-solid fa-trash mx-3"></i>
          <i class="fa-regular fa-pen-to-square mx-3"></i>
          
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
