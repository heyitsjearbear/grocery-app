import Card from "./UI/Card";
import SubTitle from "./SubTitle";
import Items from "./Items/Items";
const List = (props) => {
  return (
    <Card>
      <SubTitle />
      <div className="items">
        {props.itemList.map((item) => (
          <Items key= {item.id} name={item.food} amount={item.amount} />
        ))}
      </div>
    </Card>
  );
};

export default List;
