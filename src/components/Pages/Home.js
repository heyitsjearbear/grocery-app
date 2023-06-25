import React from "react";
import NewItemPanel from "../NewItemPanel";
import List from "../List";
const Home = () => {
  return (
    <div>
      <NewItemPanel onNewItemAdded={saveNewItemHandler} />
      <List itemList={items} />
    </div>
  );
};

export default Home
