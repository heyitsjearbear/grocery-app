import Card from "./UI/Card";
import Items from "./Items/Items";
import FilterHeading from "./FilterHeading";
const List = (props) => {
  return (
    <Card>
      <FilterHeading />
      <div className="items">
        {props.itemList.map((item) => (
          <Items key= {item.id} name={item.food} type = {item.type} amount={item.amount} />
        ))}
      </div>
    </Card>
  );
};

export default List;
