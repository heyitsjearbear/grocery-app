import React, { useState } from "react";
import "./Title.css";
const Title = () => {
  const [isNewItemFormVisible, setIsNewItemFormVisible] = useState(false);

  const toggleNewItemForm = () => {
    setIsNewItemFormVisible(!isNewItemFormVisible);
  };
  return (
    <div>
      <div className="title">
        <h2>Grocery List</h2>
        <button onClick={toggleNewItemForm}>Add</button>
      </div>
      {isNewItemFormVisible && (
        //TODO make/style form, make submit button be added
        // list dynamically
        <form>
          <div className="new-item-control">
            <label>Food Item</label>
            <input type="text" />
          </div>
          <div className="new-item-control">
            <label>Amount</label>
            <input type="number" min="1" step="1" />
          </div>
        </form>
      )}
    </div>
  );
};

export default Title;
