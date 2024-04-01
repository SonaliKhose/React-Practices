import React from "react";
import { useState } from "react";


const TextForm=(props)=>{

    const ToUpperCase=()=>{
     
        let newText= text.toUpperCase();
        setText(newText);
    }

    const ToLowercase=()=>{
     
        let newText= text.toLowerCase();
        setText(newText);
    }

    const AfterChange=(event)=>{
        setText(event.target.value)
    }
    
    const [text,setText]=useState("Enter Text");

    return(
       
        <>
        <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea value={text} onChange={AfterChange} className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ToUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={ToLowercase}>Convert to LowerCase</button>
        </div>

        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Characters.</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>

    )
}
export default TextForm;