import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = ({
  ingredients,
  backdropHandlerClick,
  purchaseContinueHandler,
  totalPrice
}) => {
  const ingredientsSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" btnClick={backdropHandlerClick}>
        CANCEL
      </Button>
      <Button btnType="Success" btnClick={purchaseContinueHandler}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
