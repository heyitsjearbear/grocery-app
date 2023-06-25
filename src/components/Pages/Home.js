import React from "react";
import NewItemPanel from "../NewItemPanel";
import List from "../List";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Hello {location.state.id} and welcome to the home</h1>
      <NewItemPanel onNewItemAdded={saveNewItemHandler} />
      <List itemList={items} />
    </div>
  );
};

export default Home
