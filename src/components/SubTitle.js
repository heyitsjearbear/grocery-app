import "./SubTitle.css";
import Card from "./UI/Card";
const SubTitle = () => {
  return (
    <div className = "sub-title">
      <p>Items(x)</p>
      <Card className = "empty-list">Empty List</Card>
    </div>
  );
};

export default SubTitle;
