const AmountCounter = (props) => {
  return (
    <div className = "counter">
      <h2>{props.amount}</h2>
      <div className="button-container">
        <button className="plus-button">+</button>
        <button className="minus-button">-</button>
      </div>
    </div>
  );
};

export default AmountCounter;
