import NewItemPanel from "./components/NewItemPanel";
import List from "./components/List";
import React, { useState } from "react";

const STARTING_ITEMS = [
  { id: "e1", food: "banana", type: "fruit", amount: 2 },
  { id: "e2", food: "apple", type: "fruit", amount: 4 },
];
const App = () => {
  const [items, setItems] = useState(STARTING_ITEMS);
  const saveNewItemHandler = (enteredItem) => {
    //special case where state depends on previous stae
    setItems((prevItems) => {
      return [enteredItem, ...prevItems];
    });
  };
  return (
    <div>
      <NewItemPanel onNewItemAdded={saveNewItemHandler} />
      <List itemList={items} />
    </div>
  );
};

export default App;
