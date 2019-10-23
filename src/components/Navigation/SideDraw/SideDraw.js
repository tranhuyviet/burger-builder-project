import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDraw.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const sideDraw = ({ showSideDrawer, sideDrawerClosedHandler }) => {
  return (
    <Aux>
      <Backdrop show={showSideDrawer} clicked={sideDrawerClosedHandler} />
      <div
        className={
          showSideDrawer
            ? [classes.SideDraw, classes.Open].join(" ")
            : [classes.SideDraw, classes.Close].join(" ")
        }
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDraw;
