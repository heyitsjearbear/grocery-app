import "./Items.css";
import "./AmountCounter.css"
import Card from "../UI/Card";
import AmountCounter from "./AmountCounter"
const Items = (props) => {
  return (
    <Card>
      <div className="item-card">
        <div>Picture here</div>
        <p>{props.name}</p>
        <AmountCounter amount = {props.amount}/>
      </div>
    </Card>
  );
};

export default Items;
