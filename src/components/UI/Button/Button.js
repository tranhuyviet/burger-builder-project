import React from "react";

import classes from "./Button.css";

const button = ({ btnType, btnClick, children }) => {
  return (
    //   buttonType is Success or Danger
    <button
      className={[classes.Button, classes[btnType]].join(" ")}
      onClick={btnClick}
    >
      {children}
    </button>
  );
};

export default button;
