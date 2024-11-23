import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import FavoriteList from './components/FavoriteList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchRecipes = async (query) => {
    const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
    const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      setRecipes(response.data.hits); // Simpan hasil pencarian di state
    } catch (error) {
      console.error("Error fetching the recipes:", error);
    }
  };

  // Tambahkan fungsi untuk menyimpan ke localStorage
  const addToFavorites = (recipe) => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Simpan di localStorage
  };

  console.log(recipes)

  return (
    <div className="container" style={{ backgroundColor: '#f0f0f0', padding: '20px', minHeight: '100vh' }}>
      <h1 style={{textAlign:"center"}}>Apa jenis masakan favoritmu?</h1>
      <div style={{textAlign:'center'}}>
        <SearchBar onSearch={searchRecipes} />
      </div>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe.recipe}
            addToFavorites={() => addToFavorites(recipe.recipe)}
          />
        ))}
        {favorites.map((recipe, index) => (
          <FavoriteList/>
        ))}
      </div>
    </div>
  );
};

export default App;
