import React, { Component } from "react";
import logo from "./logo.svg";
import MoveBuilder from "./containers/MoveBuilder/MoveBuilder";
// import Header from "./UI/Header/Header";
import Toolbar from "./components/UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "./components/UI/Navigation/SideDrawer/SideDrawer";
import SubmitData from "./containers/SubmitData/SubmitData";
import FormPage from "./components/FormPage/FormPage";
import { Route, Switch } from "react-router-dom";
// import MoveBui

class App extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosed = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <div className="container">
        <Toolbar drawerToggledClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosed}
          open={this.state.showSideDrawer}
        />
        <Switch>
          <Route path="/submit" component={SubmitData} />
          <Route path="/" exact component={MoveBuilder} />
        </Switch>
      </div>
    );
  }
}

export default App;
