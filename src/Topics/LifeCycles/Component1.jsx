import React from "react";

export default class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Component 1 Constructor run");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Props:", props);
    console.log("State:", state);
    console.log("Component 1 GetDerivedStateFromProps run");
    return state;
  }

  componentDidMount() {
    console.log("Component 1 ComponentDidMount run");
  }

  componentWillUnmount() {
    console.log("Component 1 ComponentWillUnmount run");
  }

  render() {
    console.log("Component 1 Render run");
    return (
      <>
        <h1>Component 1</h1>
      </>
    );
  }
}
