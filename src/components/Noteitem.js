import React from "react";

function Noteitem(props) {
  const note = props.note;
  return (
    <div className="col my-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
