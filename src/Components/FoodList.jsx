import FoodItem from "./FoodItem";

import "../Components-Style/FoodList.css";

function FoodList({ foods }) {
  return (
    <div className="food-card">
      {foods.map((recipe, key) => {
        return <FoodItem recipe={recipe} key={key} />;
      })}
    </div>
  );
}

export default FoodList;
