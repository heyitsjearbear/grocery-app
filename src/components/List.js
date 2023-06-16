import React, { useState } from "react";
import Card from "./UI/Card";
import Items from "./Items/Items";
import FilterHeading from "./FilterHeading";
const List = (props) => {
  const [selectedType, setSelectedType] = useState("fruit");
  const onTypeFilterSelectHandler = (type) => {
    setSelectedType(type);
  };
  const filteredItems = props.itemList.filter((item) => {
    return item.type === selectedType;
  });

  let listContent = <p>No items found.</p>;

  if (filteredItems.length > 0) {
    listContent = filteredItems.map((item) => (
      <Items
        key={item.id}
        name={item.food}
        type={item.type}
        amount={item.amount}
      />
    ));
  }
  return (
    <Card>
      <FilterHeading
        selected={selectedType}
        onTypeFilterSelect={onTypeFilterSelectHandler}
      />
      <div className="items">
        {listContent}
      </div>
    </Card>
  );
};

export default List;
