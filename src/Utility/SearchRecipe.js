import axios from "axios";


const searchRecipe = async (term) => {
  const API_ID = "7162f83d";
  const API_KEY = "0f48bbfbc9a62a9cd5f91f7ea95a3c87";

  const response = await axios.get(
    `https://api.edamam.com/search?q=${term}&app_id=${API_ID}&app_key=${API_KEY}`
  );
  const data = response.data;
  return data.hits;
};

export default searchRecipe;
