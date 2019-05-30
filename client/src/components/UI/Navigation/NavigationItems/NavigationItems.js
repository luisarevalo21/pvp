import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    {/* <NavigationItem link="/submit" active>
      Submit an Entry
    </NavigationItem> */}
    {/* <NavigationItem link="/">Sign Up </NavigationItem> */}
  </ul>
);

export default navigationItems;
