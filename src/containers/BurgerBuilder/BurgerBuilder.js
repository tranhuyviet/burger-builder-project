import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  //add ingredients (more-button click)
  addIngredientHandler = type => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] += 1;

    let totalPrice = this.state.totalPrice;

    totalPrice += INGREDIENT_PRICES[type];
    //totalPrice = parseFloat(totalPrice.toFixed(2));

    //console.log("add", totalPrice);
    this.setState({
      ingredients,
      totalPrice
    });
    this.updatePurchaseState(ingredients);
  };

  //remove ingredients (less-button click)
  removeIngredienHandler = type => {
    //console.log("remove");
    const ingredients = { ...this.state.ingredients };
    if (ingredients[type] <= 0) {
      return;
    }
    ingredients[type] -= 1;
    let totalPrice = this.state.totalPrice;

    totalPrice -= INGREDIENT_PRICES[type];
    //totalPrice = parseFloat(totalPrice.toFixed(2));
    //console.log("remove", totalPrice);
    this.setState({
      ingredients,
      totalPrice
    });
    this.updatePurchaseState(ingredients);
  };

  //update purchable: check atlest Plus ingredients, if purchasable = false -> less button disibled
  updatePurchaseState = ingredients => {
    // const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  };

  //purchase handler when button ORDER NOW click
  //set the purchasing: true that mean show the <Modal/>
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  //close modal and backdrop when click in backdrop
  backdropHandlerClick = () => {
    this.setState({ purchasing: false });
  };

  //continue handler when click CONTINUE button in OrderSummary
  purchaseContinueHandler = () => {
    console.log("you continue!");
  };

  render() {
    let disableButton = { ...this.state.ingredients };
    for (let type in disableButton) {
      disableButton[type] = disableButton[type] <= 0;
    }
    return (
      <Aux>
        <Modal
          purchasing={this.state.purchasing}
          backdropHandlerClick={this.backdropHandlerClick}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            backdropHandlerClick={this.backdropHandlerClick}
            purchaseContinueHandler={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredienHandler={this.removeIngredienHandler}
          disableButton={disableButton}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
