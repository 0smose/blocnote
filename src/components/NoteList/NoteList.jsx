import React from 'react';

const NoteList = () => {

    return Object.keys(localStorage).map((obj,id )=> {
        return( 
        <div key={id}>{localStorage.getItem(obj)}</div>
     )})
     };

export default NoteList;