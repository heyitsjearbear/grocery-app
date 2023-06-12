import "./List.css";
import Card from "./UI/Card";
import SubTitle from "./SubTitle";
import Items from "./Items/Items";
const List = (props) => {
  return (
    <Card>
      <SubTitle />
      <div className="items">
        <Items
          name={props.itemList[0].food}
          amount={props.itemList[0].amount}
        />
        <Items
          name={props.itemList[1].food}
          amount={props.itemList[1].amount}
        />
      </div>
    </Card>
  );
};

export default List;
