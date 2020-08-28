import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
       setNote(prevNote => {
           return{
               ...prevNote,
               [name]: value
           };
       });
    }

    function submitNote(e) {
        props.onAdd(note);
        e.preventDefault();
    }

    const [zoom, setZoom] = useState(false);

    function handleInput() {
      
      setZoom(true);
    }

    

  return (
    <div>
      <form>
        <input style={{display: !zoom &&  "none"}} value={note.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea onClick={handleInput} value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={zoom? 3: 1} />
        <Zoom in={zoom}>
        <Fab className="button" onClick={submitNote}>
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;