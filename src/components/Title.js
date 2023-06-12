import React, { useState } from "react";
import "./Title.css";
import Card from "./UI/Card";
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
          <div className="form-controls">
            <Card>
              <p>Name</p>
            </Card>
            <Card>
              <p>Amount</p>
            </Card>
          </div>
        </form>
      )}
    </div>
  );
};

export default Title;
