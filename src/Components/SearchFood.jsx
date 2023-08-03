import { useState } from "react";

import "../Components-Style/SearchFood.css";

function SearchFood({ search }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className="searchInput"
          placeholder="Search Recipe ... "
        />
        <button className="searchBtn">Search</button>
      </form>
    </div>
  );
}

export default SearchFood;
