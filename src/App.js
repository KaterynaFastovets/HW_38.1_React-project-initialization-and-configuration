import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [InputText] = useState("");

  const changeInputText = (event) => {
    InputText(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form>
          <Input
            type="text"
            placeholder="Your text"
            onChange={changeInputText}
          />
          <Button text="Click" />
        </form>
      </header>
    </div>
  );
}

export default App;
