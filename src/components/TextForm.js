import React ,{useState}from "react"

export default function TextForm(props) {
  const [text, setText] = useState('');
  // text = "new text" ;// wrong way to change the text
  // setText("new text"); // Correct way to change the text

  const handleUpClick = ()=>{
    // console.log("Uppercase");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upperCase!" ,"success")
  }

  const handlelowClick = ()=>{
    // console.log("Uppercase");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase!" ,"success")

  }
  const handleClearClick = ()=>{
    // console.log("Uppercase");
    let newText = " ";
    setText(newText);
   props.showAlert("Text Cleared!" ,"success")

  }

  

  const handleCaptClick = ()=>{
    // console.log("Uppercase");
    let arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let str2 = arr.join(" ");
   setText(str2)
   props.showAlert("Converted to Captalize!" ,"success")

  }

const handleCopy = ()=>
{navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard!" ,"success")

}

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are Removed!" ,"success")

  }



  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>

    <div className="container" style={{color: props.mode === 'light' ? 'black': 'white'}}>   
      <div className="container my-4">
          <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} placeholder="Type or paste your content here" onChange ={handleOnChange} id="myBox" rows="7" style={{backgroundColor: props.mode === 'light' ? 'white': '#232b41',color:props.mode === 'light' ? 'black': 'white'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick ={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick ={handlelowClick}>Convert To lowercase</button>
        <button className="btn btn-primary mx-2" onClick ={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick ={handleCaptClick}>Convert To Captalize</button>
        <button className="btn btn-primary mx-2" onClick ={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick ={handleExtraSpaces}>Remove Extra Spaces</button>





      </div>
    </div>
    <div className="container my-4"  style={{color: props.mode === 'light' ? 'black': 'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * (text.split("").length)}  minites to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
      

    </div>

    </>

  );
}
