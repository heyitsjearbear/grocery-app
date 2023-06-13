import "./FilterHeading.css";
import Card from "./UI/Card";
const FilterHeading = () => {
  return (
    <div className = "sub-title">
      <p>Items(x)</p>
      {
        //TODO add filter button here to filter types of food
      }
      <Card className = "empty-list">Empty List</Card>
    </div>
  );
};

export default FilterHeading;
