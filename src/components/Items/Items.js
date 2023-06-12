import "./Items.css";
import "./AmountCounter.css"
import Card from "../UI/Card";
import AmountCounter from "./AmountCounter"
const Items = () => {
  return (
    <Card>
      <div className="item-card">
        <div>Picture here</div>
        <p>Item name</p>
        <AmountCounter/>
      </div>
    </Card>
  );
};

export default Items;
