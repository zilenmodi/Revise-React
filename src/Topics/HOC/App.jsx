import React from "react";
import { HOCFn } from "./HOCFn";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Higher Order Component</h1>
        <h2>Names</h2>
        <ul>
          {this.props.nameLists.map((name) => {
            return (
              <li key={name}>
                <h3>{name}</h3>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HOCFn(App);
