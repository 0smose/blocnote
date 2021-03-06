import React from 'react';
import Showdown from "showdown";

const NoteDisplay = ({title, content}) => {
    const converter = new Showdown.Converter();
    let htmlContent = converter.makeHtml(content);

    function createMarkup() {
      return { __html: htmlContent };
    }
    return (
      <div style={{paddingTop: '10vh'}}>
        <h1 className="text-primary">{title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    );
}

export default NoteDisplay;