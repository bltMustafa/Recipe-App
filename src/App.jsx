import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import SearchFood from "./Components/SearchFood";
import searchRecipe from "./Utility/SearchRecipe";
import FoodList from "./Components/FoodList";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (term) => {
    const result = await searchRecipe(term);
    setRecipe(result);
    setSearched(true);
  };

  useEffect(() => {
    searchRecipe();
    setSearched(false);
  }, []);

  return (
    <div>
      <Navbar />
      {!searched && <SearchFood search={handleSubmit} />}
      {searched && (
        <div className="clear-recipe">
          <button
            onClick={() => {
              setRecipe([]);
              setSearched(false);
            }}
          >
            Clear Recipe
          </button>
        </div>
      )}
      <FoodList foods={recipe} />
    </div>
  );
}

export default App;
