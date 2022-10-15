
import './App.css';

function App() {
  return (

    <form method="POST">
      <label>Caption</label>
      <input type="text" id="caption"></input>
      <br></br>
      <label>Prompt</label>
      <input type="text" id="prompt"></input>
      <br></br>
      <label>Diary Entry</label>
      <textarea type="text" id="entry"></textarea>
      <br></br>
      <button type="submit">Submit</button>
    </form>

  );
}

const styles = StyleSheet.create({



})

export default App;
