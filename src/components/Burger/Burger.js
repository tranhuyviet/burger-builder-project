import React from "react";

import BurgerIngerdient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.css";

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, index) => {
        return <BurgerIngerdient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  //console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngerdient type="bread-top" />
      {transformedIngredients}
      <BurgerIngerdient type="bread-bottom" />
    </div>
  );
};

export default burger;
