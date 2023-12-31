import "./Items.css";
import "./AmountCounter.css";
import Card from "../UI/Card";
import AmountCounter from "./AmountCounter";
import React from "react";
const Items = (props) => {
  return (
    <Card className="item-card">
      <div>Picture here</div>
      <p>
        {props.name} ({props.type})
      </p>
      <AmountCounter amount={props.amount} />
    </Card>
  );
};

export default Items;
