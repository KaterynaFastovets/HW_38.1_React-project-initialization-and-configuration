import React from "react";

function StatelessComponent(props) {
  return (
    <div className="logo">
      <h4>{props.texth4}</h4>
      <h1>{props.texth1}</h1>
      <img className="App-logo" src={props.logo} alt={props.name} />
    </div>
  );
}

export default StatelessComponent;
