import "../Components-Style/FoodItem.css";

function FoodItem({ recipe }) {
  const caloriesRound = Math.round(recipe.recipe.calories);

  return (
    <div className="card">
      <div className="food-image">
        <img src={recipe.recipe.image} />
      </div>
      <h2> {recipe.recipe.label} </h2>
      <h4>Calories: {caloriesRound}</h4>
      <h3> İngredients </h3>
      <ol>
        {recipe.recipe.ingredientLines.map((ingredient, key) => (
          <li key={key}> {ingredient} </li>
        ))}
      </ol>
    </div>
  );
}

export default FoodItem;
