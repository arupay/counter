import { Component } from "react";

const count = 0;

class Counter extends Component {
  render() {
    return (
      <>
        <h1>The count is: {count}</h1>
        <button>+1</button>
      </>
    );
  }
}

export default Counter;
