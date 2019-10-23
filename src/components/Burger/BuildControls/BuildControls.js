import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = ({
  addIngredientHandler,
  removeIngredienHandler,
  disableButton,
  totalPrice,
  purchasable,
  purchaseHandler
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(item => {
        return (
          <BuildControl
            label={item.label}
            key={item.label}
            addIngredientHandler={() => addIngredientHandler(item.type)}
            removeIngredienHandler={() => removeIngredienHandler(item.type)}
            disableButton={disableButton[item.type]}
          />
        );
      })}

      {/* order button */}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={purchaseHandler}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
