import React from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = ({ purchasing, backdropHandlerClick, children }) => {
  return (
    <Aux>
      <Backdrop show={purchasing} clicked={backdropHandlerClick} />
      <div
        className={classes.Modal}
        style={{
          transform: purchasing ? "translateY(0)" : "translateY(-100vh)",
          opacity: purchasing ? "1" : "0"
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

export default modal;
