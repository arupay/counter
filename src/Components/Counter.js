import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </>
    );
  }
}

export default Counter;
