import React, { Component } from "react";
import logo from "./logo.svg";
import MoveBuilder from "./containers/MoveBuilder/MoveBuilder";
import Header from "./UI/Header/Header";
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        <Header />
        <MoveBuilder />
      </div>
    );
  }
}

export default App;
