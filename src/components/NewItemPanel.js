import React, { useState } from "react";
import "./NewItemPanel.css";
const NewItemPanel = (props) => {
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
    const newItemData = {
      id: `e${Math.random()}`,
      food: enteredFoodItem,
      amount: Number(enteredAmount)
    };
    props.onNewItemAdded(newItemData);
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
          {
            //TODO add dropdown for item type
          }
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NewItemPanel;
