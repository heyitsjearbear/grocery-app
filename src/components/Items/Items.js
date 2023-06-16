import "./Items.css";
import "./AmountCounter.css";
import Card from "../UI/Card";
import AmountCounter from "./AmountCounter";
const Items = (props) => {
  return (
    <Card className="item-card">
      <div>Picture here</div>
      <p>{props.name} ({props.type})</p>
      {
        //TODO make buttons for editing amount number
        //functionable
      }
      <AmountCounter amount={props.amount} />
    </Card>
  );
};

export default Items;
