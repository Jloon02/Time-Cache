import Entry from './components/Entry';
import Form from './components/Form';
import './App.css';
import * as React from 'react';

function App() {
  
  let data = {
    prompt: "prompt",
    caption: "caption",
    date: "date", 
    imageURL: "https://api.deepai.org/job-view-file/69018c99-9241-4c1e-b963-585f755d7712/outputs/output.jpg"
  }
  
  return (
    <div>
    <Form></Form>
    
    <Entry prompt={data.prompt} caption={data.caption} log={data.date} imageURL={data.imageURL}></Entry>
    <Entry prompt={data.prompt} caption={data.caption} log={data.date} imageURL={data.imageURL}></Entry>
    </div>

  );
}

export default App;
