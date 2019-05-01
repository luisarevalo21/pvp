import React, { Component } from "react";
import logo from "./logo.svg";
import MoveBuilder from "./containers/MoveBuilder/MoveBuilder";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <MoveBuilder />
      </div>
    );
  }
}

export default App;
