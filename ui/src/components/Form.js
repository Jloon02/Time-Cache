import './Form.css';
import * as React from 'react';

function Form() {
    return (
        <form method="POST">
            <input type="text" id="input-caption" placeholder="Caption"></input>
            <br></br>
            <input type="text" id="input-prompt" placeholder="Prompt"></input>
            <br></br>
            <textarea type="text" id="input-diary-entry" placeholder="Caption" rows="6"></textarea>
            <br></br>
            <button type="submit" id="submit">Submit</button>
        </form>
    );
}

export default Form;