
import './App.css';

function App() {
  return (

    <form method="POST">
      <label>Caption</label>
      <input type="text" id="caption"></input>
      <label>Prompt</label>
      <input type="text" id="prompt"></input>
      <label>Diary Entry</label>
      <input type="text" id="entry"></input>
      <button>Submit</button>
    </form>

  );
}

export default App;
