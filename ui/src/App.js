import Entry from './components/Entry';
import Form from './components/Form';
import './App.css';
import * as React from 'react';
import {View} from 'react';

function App() {
  
  let data = {
    prompt: "prompt",
    caption: "caption",
    log: "log", 
    imageURL: "https://api.deepai.org/job-view-file/ffb47e35-7583-47f6-ac92-599f70924f93/outputs/output.jpg"
  }
  
  return (
    <div>
    <Form></Form>
    
    <Entry prompt={data.prompt} caption={data.caption} log={data.log} imageURL={data.imageURL}></Entry>
    </div>

  );
}

export default App;
