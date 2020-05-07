import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NoteList from './components/NoteList/NoteList';



const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteList, setNoteList] = useState([]);




  const saveInput = (note) => {
    if (note.title && note.content) {
    setTitle(note.title);
    setContent(note.content);
    setNoteList([...noteList, note]);
    } else {
      alert('met un titre et un contenu sinon ça refresh ;)')
      window.location.reload(false);
    }
   
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    setNoteList(notes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
  }, [noteList]);





  const addInput = (note) => {
    //console.log(note.content)
    setTitle(note.title);
    setContent(note.content);
    
  };
  const savedNotes = noteList.map((note, index) => (
    <div key={index} className="note">
      
        <h3>{note.title}</h3>
        <p>
          {note.content.length > 140
            ? note.content.substring(0, 140) + "..."
            : note.content}
        </p>
      
     
    </div>
  ));

  return (
    <div className="container-fluid row" style={{margin: "0", padding: '0'}}>
      <div className="App col-4" style={{backgroundColor: "red", height: '100vh'}}>
        <h1 style={{paddingTop: "80px"}}>Liste de fou super jolie</h1>
        <div style={{paddingTop: "100px"}}>{savedNotes}</div>
      </div>
      <div className="App col-8" style={{backgroundColor: "blue", height: '100vh'}}>
        
       
      <MarkdownInput handleChange={addInput} handleClick={saveInput} />
      <NoteDisplay title={title} content={content}/>

      

      </div>
    </div>
  );
};

export default App;
