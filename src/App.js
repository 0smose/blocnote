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




  const saveInput = (e) => {
    e.preventDefault();
    const note = [title, content];
    localStorage.setItem('note', JSON.stringify(note));  
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('note'));
   

  }, []);




  const addInput = (note) => {
    //console.log(note.content)
    setTitle(note.title);
    setContent(note.content);
    
  };



  return (
    <div className="container-fluid row" style={{margin: "0", padding: '0'}}>
      <div className="App col-4" style={{backgroundColor: "red", height: '100vh'}}>
        <h1>Liste de fou super jolie</h1>

      <NoteList/>
       
      </div>
      <div className="App col-8" style={{backgroundColor: "blue", height: '100vh'}}>
        
       
      <MarkdownInput handleChange={addInput} handleClick={saveInput} />
      <NoteDisplay title={title} content={content}/>

      

      </div>
    </div>
  );
};

export default App;
