import NewItemPanel from "./components/NewItemPanel";
import List from "./components/List";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Pages/Signup";
import Home from "./components/Pages/Home";
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
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
