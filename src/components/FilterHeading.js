import React, { useState } from "react";
import "./FilterHeading.css";
import "./NewItemPanel.css";
const FilterHeading = (props) => {
  const [isNewItemFormVisible, setIsNewItemFormVisible] = useState(false);
  const toggleNewItemForm = () => {
    setIsNewItemFormVisible(!isNewItemFormVisible);
  };
  const filterTypeChangeHandler = (event) => {
    props.onTypeFilterSelect(event.target.value)
  };
  return (
    <div className="sub-title">
      <p>Items(x)</p>
      <button onClick={toggleNewItemForm}>Filter</button>
      {isNewItemFormVisible && (
        <div className="new-item-control">
          <label>Type</label>
          <select value = {props.selected} onChange={filterTypeChangeHandler}>
            <option value="fruit">fruit</option>
            <option value="veggie">veggie</option>
            <option value="protein">protein</option>
            <option value="carb">carb</option>
          </select>
        </div>
      )}
      <button className="empty-list">Empty List</button>
    </div>
  );
};

export default FilterHeading;
