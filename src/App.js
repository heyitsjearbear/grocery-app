import Title from "./components/Title";
import List from "./components/List";
const App = () => {
  //TODO child-to-parent pass form submission from Title component all the way up so you can append
  // to this items array, and append back to List component dynamically
  const items = [
    { food: "banana", amount: 2 },
    { food: "apple", amount: 4 },
  ];
  return (
    <div>
      <Title />
      <List itemList={items} />
    </div>
  );
};

export default App;
