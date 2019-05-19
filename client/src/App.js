import React, { Component } from "react";
import logo from "./logo.svg";
import MoveBuilder from "./containers/MoveBuilder/MoveBuilder";
import Header from "./UI/Header/Header";
import NavBar from "./UI/Navbar/NavBar";
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <NavBar /> */}
        {/* <Navbar /> */}
        <Header />
        <MoveBuilder />
      </div>
    );
  }
}

export default App;
