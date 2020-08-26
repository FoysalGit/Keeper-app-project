import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreatArea";

function App() {

  const [newNotes, setNewNote] = useState([]);
    function addNote(note) {
        setNewNote(prevNote => {
          return[
            ...prevNote,
            note
          ];
        });
    }

    function deleteNote(id) {
      setNewNote(prevNotes=> prevNotes.filter((prevNote,index) =>{
        return  index !== id;
      }));
    }

  return (
      <>
        <Header />
        <CreateArea onAdd = {addNote} />
        {newNotes.map((newNote,index) => <Note onDelete={deleteNote} key={index} id={index} title={newNote.title} content={newNote.content}/>)}
        
        <Footer />
      </>
      
  );
}

export default App;