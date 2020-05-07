import React from 'react';

const NoteList = () => {
    console.log(localStorage.length)
    for( let i = 0; i < localStorage.length; i++){
        console.log(localStorage.key(i));
    }

    return Object.keys(localStorage).map((obj,id )=> {
        return( 
        <div key={id}>{localStorage.getItem(obj)}</div>
     )})
     };

export default NoteList;