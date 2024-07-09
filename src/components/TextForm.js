import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text was convert into uppercase","success");
    }

    const handleLoClick = ()=>{
      console.log("Uppercase was clicked");
      let newText =  text.toLowerCase();
      setText(newText);
      props.showAlert("Text was convert into lowercase","success");

    }
    const handleCleanClick = ()=>{
      console.log("Uppercase was clicked");
      let newText =  "";
      setText(newText);
      props.showAlert("Text was clean","success");

    }

    const handleCapClick = ()=>{
      console.log("Text was CapitalCase");
      let newText = text.charAt(0).toUpperCase() + text;
      setText(newText);
      props.showAlert("Text was convert into CapitalCase","success");
    }

    const handleRevClick = () =>{
      console.log("Text was reverse");
      let newText = text.split("").reverse().join("");
      setText(newText);
      props.showAlert("Text was reverse","success");

    }

    const handleCopyClick = ()=>{
      console.log("Text was copied");
      let newText = document.getElementById("myBox");
      newText.select();
      newText.setSelectionRange(0,9999999);
      navigator.clipboard.writeText(newText.value).then(()=>{
        alert("Text Copied");
      });
      setText(newText.value);
      props.showAlert("Text was copied","success");

    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text,setText] = useState("Enter text here");
    // text = "new text"; //Wrong way to change text
    // setText = "new Text"; // Right way to change text 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ? 'white':'black'}}>
      <div class="form-floating">
        <h3>TEXTFORM</h3>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea name="" id="myBox" value={text} style={{backgroundColor:props.mode==='dark' ? '#042743':'white' , color:props.mode==='dark'? 'white':'black'}} className="form-control" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCleanClick}>CLear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize the text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleRevClick}>Reverse the Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>It takes {0.008*text.split(" ").length} minutes to read</p>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
