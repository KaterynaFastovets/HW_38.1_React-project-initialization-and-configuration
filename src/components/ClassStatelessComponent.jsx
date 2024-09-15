import React from "react";
class ClassStatelessComponent extends React.Component {
    render() {
        return (
            <div className="logo">
              <h4>{this.props.texth4}</h4>
              <h1>{this.props.texth1}</h1>
              <img className="App-logo" src={this.props.logo} alt={this.props.name} />
            </div>
          );
    }
  }

export default ClassStatelessComponent