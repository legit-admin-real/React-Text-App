import React, { useState } from "react";

function Textarea(props) {
  const [title, setTitle] = useState("Enter Something...");
  const [buttonText, setButtonText] = useState("Click to copy");

  const changeCopy = () => {
    setButtonText('Copied!');
    props.alert("Copied to Clipboard", "success");
    setTimeout(() => {
      setButtonText('Click to copy')
    }, 1000)
  }

  const doUpper = () => {
    const upper = title.toUpperCase();
    setTitle(upper);
    props.alert("Converted to Uppercase!", "primary")
  };
  const doLower = () => {
    const lower = title.toLowerCase();
    setTitle(lower);
    props.alert("Converted to Lowercase!", "primary")
  };
  const handleInput = (event) => {
    setTitle(event.target.value);
  };
  const clearText = () => {
    const statusConfirm = window.confirm("Are you sure about this⁉😳💀");
    if (statusConfirm) {
      setTitle("");
      props.alert("Cleared Text!", "warning")
    }
  };
  const clearText2 = () => {
    if (title === "Enter Something...")
      setTitle("");
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        {/* style={{backgroundColor : props.mode === 'dark' ? '#282b30' : 'light', color : props.mode === 'dark' ? 'white' : 'light'}} */}
        <div className="mb-3 my-2" >
          <label for="exampleFormControlTextarea1" className="form-label">
            <h3>Text Area</h3>
          </label>
          <textarea
            value={title}
            onChange={handleInput}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="20"
            onClick={clearText2}
            style={{ backgroundColor: props.mode === 'dark' ? '#282b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
          <button disabled={title.length===0} className=" btn btn-primary my-2" onClick={doUpper}>
            Upper case
          </button>
          <button disabled={title.length===0} className=" btn btn-primary my-2 mx-2" onClick={doLower}>
            Lower case
          </button>
          <button disabled={title.length===0} className=" btn btn-info my-2 mx-1" onClick={() => { navigator.clipboard.writeText(title); changeCopy(); }}>
            {buttonText}
          </button>
          <button disabled={title.length===0} className=" btn btn-danger my-2 mx-1" onClick={clearText}>
            Clear
          </button>
          <h4 className="my-2">Info</h4>
          <p>
            You document has <b>{title.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{title.length}{" "}</b>
            characters. 💌
          </p>
          <p style={{ fontFamily: "monospace", fontWeight: "bold", fontSize: "18px" }} className="my-1">
            <i>
              {Math.round(0.008 * title.split(" ").length) < 1
                ? "Less than a"
                : Math.round(0.008 * title.split(" ").length)}{" "}
              min read
            </i>
          </p>
        </div>
      </div>
    </>
  );
}

export default Textarea;
