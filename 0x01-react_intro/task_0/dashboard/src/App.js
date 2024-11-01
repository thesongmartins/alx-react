import Hob from "./Hob.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Hob} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr className="horizontal-rule" />
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
