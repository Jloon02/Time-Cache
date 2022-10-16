// import { response } from 'express';
import React, { useState } from 'react'
import './Form.css';


function Form() {

    const [caption, setCaption] = useState("");
    const [prompt, setPrompt] = useState("");
    const [log, setLog] = useState("");

    const onSubmit = evt => {
        evt.preventDefault();

        console.log(caption);
        console.log(prompt);
        console.log(log);

        setCaption("");
        setPrompt("");
        setLog("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                id="caption" 
                placeholder="Caption"
                onChange={(e)=>setCaption(e.target.value)}></input> 

            <br></br>
            <input 
                type="text" 
                id="prompt" 
                placeholder="Prompt"
                onChange={(e)=>setPrompt(e.target.value)}></input>
                
            <br></br>
            <textarea 
                type="text" 
                id="log" 
                placeholder="Diary Entry" 
                rows="6"
                onChange={(e)=>setLog(e.target.value)}></textarea>
            <br></br>
            <button type="submit" id="submit">Submit</button>
        </form>
    );
}

export default Form;