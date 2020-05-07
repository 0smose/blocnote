import React, {useState, useEffect} from 'react'

 const MarkdownInput = ({ handleChange, handleClick }) => {
    const [input, setInput] = useState({});

    

    useEffect(() => {
        handleChange(input)
      }, [input]);


    const handleInputChange = (e) => setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value})

    

      
    return (
       
      <div style={{paddingTop: '10vh', height: '50%', border: "solid 2px black"}}>
        <h1>Ecris ta super note </h1>
        <form>
            <div>
            <label>title:</label>
            <input type="text" name="title" onChange={handleInputChange} />
            </div>
            <div>
            <label>content:</label>
            <input type="text" name="content" onChange={handleInputChange} />
            </div>
            <button onClick={() => handleClick(input)}>save</button>

        </form>
       
      </div>
    )
  }

export default MarkdownInput;