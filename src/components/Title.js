import React, { useState } from "react";
import "./Title.css";
const Title = () => {
  const [isNewItemFormVisible, setIsNewItemFormVisible] = useState(false);
  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const toggleNewItemForm = () => {
    setIsNewItemFormVisible(!isNewItemFormVisible);
  };
  const foodItemChangeHandler = (event) => {
    setEnteredFoodItem(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFoodItem);
    console.log(enteredAmount);
    setEnteredFoodItem("");
    setEnteredAmount("");
  };
  return (
    <div>
      <div className="title">
        <h2>Grocery List</h2>
        <button onClick={toggleNewItemForm}>Add</button>
      </div>
      {isNewItemFormVisible && (
        //TODO make submit button be added
        // list dynamically
        <form onSubmit={submitHandler}>
          <div className="new-item-control">
            <label>Food Item</label>
            <input
              value={enteredFoodItem}
              type="text"
              onChange={foodItemChangeHandler}
            />
          </div>
          <div className="new-item-control">
            <label>Amount</label>
            <input
              value={enteredAmount}
              type="number"
              min="1"
              step="1"
              onChange={amountChangeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Title;
