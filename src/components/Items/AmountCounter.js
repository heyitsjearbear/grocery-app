import React, {useState} from "react";
const AmountCounter = (props) => {
  const [newAmount, setNewAmount] = useState(props.amount);
  const plusOneItem = () =>{
    setNewAmount((prevAmount) =>{
      return prevAmount+1;
    });
  };
  const minusOneItem = () =>{
    setNewAmount((prevAmount) =>{
      return prevAmount-1;
    });
  };
  return (
    <div className = "counter">
      <h2>{newAmount}</h2>
      <div className="button-container">
        <button onClick = {plusOneItem} className="plus-button">+</button>
        <button onClick = {minusOneItem} className="minus-button">-</button>
      </div>
    </div>
  );
};

export default AmountCounter;
