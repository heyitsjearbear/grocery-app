import Title from "./components/Title";
import List from "./components/List";
const App = () => {
  const items = [
    { food: "banana", amount: 2 },
    { food: "apple", amount: 4 },
  ];
  return (
    <div>
      <Title />
      <List itemList = {items} />
    </div>
  );
};

export default App;
