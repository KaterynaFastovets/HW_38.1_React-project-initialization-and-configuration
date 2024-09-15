import logo from "./logo.svg";
import logo2 from "./logo2.svg";
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import StatefulComponent from "./components/StatefulComponent";
import StatelessComponent from "./components/StatelessComponent";
import ClassStatelessComponent from "./components/ClassStatelessComponent";
import ClassStatefulComponent from "./components/ClassStatefulComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StatelessComponent
          texth4={"1. Stateless Component"}
          texth1={"Learn React"}
          name={"Logotyp React"}
          logo={logo}
        />
        <StatefulComponent />
        <br />
        <ClassStatelessComponent
          texth4={"3. Class Stateless Component"}
          texth1={"Learn React"}
          name={"Logotyp React"}
          logo={logo2}
        />
        <ClassStatefulComponent />
      </header>
    </div>
  );
}

export default App;
