import "./Items.css";
import "./AmountCounter.css";
import Card from "../UI/Card";
import AmountCounter from "./AmountCounter";
const Items = (props) => {
  return (
    <Card className="item-card">
      <div>Picture here</div>
      <p>{props.name}</p>
      <AmountCounter amount={props.amount} />
    </Card>
  );
};

export default Items;
