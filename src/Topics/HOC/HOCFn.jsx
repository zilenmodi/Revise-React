import React from "react";

export const HOCFn = (Component) => {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component {...this.props} nameLists={["Zilen", "Om", "Harsh"]} />;
    }
  }

  return EnhancedComponent;
};
