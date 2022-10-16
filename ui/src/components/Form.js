// import { response } from 'express';
import { useState } from 'react'
import './Form.css';
import * as React from 'react';


function Form() {

    const [caption, setCaption] = useState("");
    const [prompt, setPrompt] = useState("");
    const [date, setDate] = useState("");

    const onSubmit = evt => {
        evt.preventDefault();

        console.log(caption);
        console.log(prompt);
        console.log(date);

        // setCaption(" ");
        // setPrompt(" ");
        // setDate(" ");
        document.getElementById("form").reset();
    };

    return (
        <form onSubmit={onSubmit} id="form">
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
            <input
                type="date" 
                id="date" 
                onChange={(e)=>setDate(e.target.value)}></input>
            <br></br>
            <button type="submit" id="submit">Submit</button>
        </form>
    );
}

export default Form;