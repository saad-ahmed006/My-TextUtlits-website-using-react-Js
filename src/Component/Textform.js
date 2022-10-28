import React, { useState } from 'react'

export default function TextForm(props) {
  const clickuphandle = () => {
    // console.log("Uppercace was clicked");
    // setText("Hey!!")
    let newtext1 = Text.toUpperCase()
    setText(newtext1)
    props.showAlert("Convert toUpperCase","success")

  }
  const clickuphandle2 = () => {
    // console.log("Uppercace was clicked");
    // setText("Hey!!")
    let newtext2 = Text.toLowerCase()
    setText(newtext2)
    props.showAlert("Convert toLowerCase","success")

  }
  const clickuphandle3 = () => {
    // console.log("Uppercace was clicked");
    // setText("Hey!!")
    let newtext3 = Text.charAt(0).toUpperCase()+Text.slice(1);
 setText(newtext3) 
 props.showAlert("Convert Fisrt letter Captalize","success")
  }
  const clickuphandle4 = () => {
    // console.log("Uppercace was clicked");
    // setText("Hey!!")
    let newtext2 = ''
    setText(newtext2)
    props.showAlert("Text Cleared","success")
   
  }
  const clickuphandle5 = () => {
    // console.log("Uppercace was clicked");
    // setText("Hey!!")
    navigator.clipboard.writeText(Text);
    props.showAlert("Copy Clipboard","success")
   
  }
  const handleonchange = (event) => {
    // console.log("On changed");
    setText(event.target.value)

  }
  const [Text, setText] = useState('');
  return (
    <>
      <div className="container " style={{color:props.mode==='dark'?'white':'black' }}>
        <div className="mt-3">
          <h1 className="text-center"  >{props.heading} </h1>
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'#4e87b5':'white' ,color:props.mode==='dark'?'white':'black'}} value={Text} onChange={handleonchange} rows="8"></textarea>
          <button disabled={Text.length===0} className={`btn btn-success  py-2 mt-4  mx-1 `} onClick={clickuphandle} >Convert to uppercase</button>
          <button  disabled={Text.length===0}className="btn btn-success py-2 mt-4 mx-1 " onClick={clickuphandle2}>Convert to lowercase  </button>
          <button disabled={Text.length===0} className="btn btn-success py-2  mt-4  mx-1 " onClick={clickuphandle3}>First letter Upcase</button>
          <button disabled={Text.length===0} className="btn btn-success py-2  mt-4 mx-1 " onClick={clickuphandle4}>Clear the text</button>
          <button disabled={Text.length===0} className="btn btn-success py-2  mt-4 mx-1 " onClick={clickuphandle5}>Copy to Clipboard</button>
        </div>
      </div>
      <div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="" >Find the Text length</h2>
        <h5 className=""><b>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and  <b>{Text.length}</b>  character</h5>
        <h5 className=""><b> {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes read the words</h5>
        <h2 className="">Perivious Text</h2>
        <p className="">{Text}</p>
<h2 className="">spaces</h2>
<p className="">Spaces {Text.split(" ").length -1}</p>


      </div>
    </>
  )
}
