import React from "react";

import classes from "./BuildControl.css";

const buildControl = ({
  label,
  addIngredientHandler,
  removeIngredienHandler,
  disableButton
}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        onClick={removeIngredienHandler}
        disabled={disableButton}
      >
        Less
      </button>
      <button className={classes.More} onClick={addIngredientHandler}>
        More
      </button>
    </div>
  );
};

export default buildControl;
