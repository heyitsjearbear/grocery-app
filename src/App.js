import Title from "./components/Title";
import List from "./components/List";
import React, { useState } from "react";

const STARTING_ITEMS = [
  { id: "e1", food: "banana", amount: 2 },
  { id: "e2", food: "apple", amount: 4 },
];
const App = () => {
  //TODO child-to-parent pass form submission from Title component all the way up so you can append
  // to this items array, and append back to List component dynamically
  const [items, setItems] = useState(STARTING_ITEMS);
  const saveNewItemHandler = (enteredItem) => {
    //special case where state depends on previous stae
    setItems((prevItems) => {
      return [enteredItem, ...prevItems];
    });
  };
  return (
    <div>
      <Title onNewItemAdded={saveNewItemHandler} />
      <List itemList={items} />
    </div>
  );
};

export default App;
