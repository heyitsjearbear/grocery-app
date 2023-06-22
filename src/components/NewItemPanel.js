import React, { useState } from "react";
import "./NewItemPanel.css";
const NewItemPanel = (props) => {
  const [isNewItemFormVisible, setIsNewItemFormVisible] = useState(false);
  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const toggleNewItemForm = () => {
    setIsNewItemFormVisible(!isNewItemFormVisible);
  };
  const foodItemChangeHandler = (event) => {
    setEnteredFoodItem(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newItemData = {
      id: `e${Math.random()}`,
      food: enteredFoodItem,
      amount: Number(enteredAmount),
      type:enteredType
    };
    props.onNewItemAdded(newItemData);
    setEnteredFoodItem("");
    setEnteredAmount("");
    setEnteredType("fruit");
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
            <label>Type</label>
            <select onChange={typeChangeHandler}>
              <option value = "fruit">fruit</option>
              <option value = "veggie">veggie</option>
              <option value = "protein">protein</option>
              <option value = "carb">carb</option>
            </select>
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
          }
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NewItemPanel;
