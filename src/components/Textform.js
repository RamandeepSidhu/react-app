import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    setText("You have clicked on handleUpclick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case" ,"Success")

  };
  const handleLcClick = () => {
    setText("You have clicked on handleUpclick");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case" ,"Success")

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Cleared" ,"Success")

  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy your text" ,"Success")


  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra space in your code" ,"Success")

  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3" >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
           
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >
          Convert to uppercase
        </button>
        <button className="btn btn-primary  mx-2" onClick={handleLcClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary  mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary  mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary  mx-2" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your daily report summary </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
