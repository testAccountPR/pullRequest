import React from "react";
import { useState } from "react";

function Form(props) {

    const [text, setText] = useState("")
    const handleUppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const jaaNaLawde = () =>{
      let newText = text+" jaa na lawde";
      setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

  return (
    <div>
      <h2 style={{marginTop:60}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          type="text"
          className="form-control "
          rows="5"
          value={text}
          aria-describedby="text"
          onChange={handleOnChange}
        />
      </div>

      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleUppercase}>
        uppertext
      </button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleLowercase}>
        lowertext
      </button>
      <button type="submit" className="btn btn-primary mx-2 my-2">
        count vowels
      </button>
      <button type="submit" className="btn btn-primary mx-2 my-2">
        clear spaces
      </button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={jaaNaLawde}>
        karke dekh kya hota hai
      </button>
    </div>
  );
}

export default Form;
