import React from "react";
class ClassStatefulComponent extends React.Component {
  state = { count: 0 };
  setCount = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div>
        <h4>4. Class Stateful Component</h4>
        <p>Ви натиснули {this.state.count} разів</p>
        <button onClick={this.setCount}>Натисни тут</button>
      </div>
    );
  }
}
export default ClassStatefulComponent;
