import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { FaBars } from "react-icons/fa";

const toolbar = ({ sideDrawerToggHandler }) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Bars}>
        <FaBars onClick={sideDrawerToggHandler} />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
