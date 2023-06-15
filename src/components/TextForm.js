import { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState("")

    const handleUpclick = () => {
        const newValue = text.toUpperCase();
        setText(newValue);
    }

    const handleLoclick = () => {
        const newValue = text.toLowerCase();
        setText(newValue);
    }

    const handleClearclick = () => {
        const newValue = "";
        setText(newValue);
    }

    const handleReverseclick = () => {
        // let strArr = text.split("").reverse().join("");
        // strArr = strArr.reverse();
        // let newValue = strArr.join("");
        // setText(newValue);

        //shorthand property to reverse a string
        let newValue = text.split("").reverse().join("");
        setText(newValue);
    }

    const handleCopy =()=>{
        var text = document.getElementById("Textarea")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRemoveSp =()=>{
        const newValue = text.split(/[ ]+/);
        setText(newValue.join(" "))
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" onChange={handleOnchange} id="Textarea" value={text} rows="8" 
                    style={{color: props.mode==='dark'?'white':'black', background:props.mode==='dark'?'#042743':'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleReverseclick}>Reverse Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSp}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>



            </div>

            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter a text above to preview it.........."}</p>
            </div>
        </>
    );
}

export default TextForm;
