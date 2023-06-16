import { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState("")

    const handleUpclick = () => {
        const newValue = text.toUpperCase();
        setText(newValue);
        props.alert("Converted to UpperCase", "success")

    }

    const handleLoclick = () => {
        const newValue = text.toLowerCase();
        setText(newValue);
        props.alert("Converted to LowerCase", "success")
    }

    const handleReverseclick = () => {
        // let strArr = text.split("").reverse().join("");
        // strArr = strArr.reverse();
        // let newValue = strArr.join("");
        // setText(newValue);

        //shorthand property to reverse a string
        let newValue = text.split("").reverse().join("");
        setText(newValue);
        props.alert("Text is Reversed", "success")

    }

    const handleCopy = () => {
        var newtext = document.getElementById("Textarea")
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        document.getSelection().removeAllRanges();
        props.alert("Copied to Clipboard", "success")

    }

    const handleRemoveSp = () => {
        const newValue = text.split(/[ ]+/);
        setText(newValue.join(" "));
        props.alert("Extra Spaces Removed", "success");

    }

    const handleClearclick = () => {
        if (text.length > 0) {
            const newValue = "";
            setText(newValue);
            props.alert("Cleared text", "success")
        } else {
            window.confirm("Already Cleared !!!")
        }
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" onChange={handleOnchange} id="Textarea" value={text} rows="8"
                        style={{ color: props.mode === 'dark' ? 'white' : 'black', background: props.mode === 'dark' ? '#042743' : 'white' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverseclick}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSp}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear</button>

            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} character</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter a text above to preview it.........."}</p>
            </div>
        </>
    );
}

export default TextForm;
