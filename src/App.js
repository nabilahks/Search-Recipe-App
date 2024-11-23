import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RandomRecipe from './components/RandomRecipe'; // Import komponen baru
import FavoriteList from './components/FavoriteList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false); // State untuk menampilkan komponen

  const searchRecipes = async (query) => {
    const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
    const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching the recipes:', error);
    }
  };

  const fetchRandomRecipe = async () => {
    const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
    const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

    try {
      const queryList = ['chicken', 'beef', 'vegetarian', 'fish', 'pasta'];
      const randomQuery = queryList[Math.floor(Math.random() * queryList.length)];
      const response = await axios.get(
        `https://api.edamam.com/search?q=${randomQuery}&app_id=${API_ID}&app_key=${API_KEY}`
      );

      const randomIndex = Math.floor(Math.random() * response.data.hits.length);
      setRandomRecipe(response.data.hits[randomIndex].recipe);
      setShowRandomRecipe(true); // Tampilkan komponen random recipe
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    }
  };

  return (
    <div className="container" style={{ padding: '20px', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#4a90e2' }}>
        Apa jenis masakan favoritmu?
      </h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <SearchBar onSearch={searchRecipes} />
        <button
          onClick={fetchRandomRecipe}
          style={{
            padding: '10px 20px',
            marginTop: '20px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#4a90e2',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          What to Cook Today?
        </button>
      </div>
      {showRandomRecipe && randomRecipe && (
        <RandomRecipe
          recipe={randomRecipe}
          onClose={() => setShowRandomRecipe(false)} // Tutup komponen
        />
      )}
      <div className="recipe-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe.recipe}
            addToFavorites={() => {}}
          />
        ))}
      </div>
      <FavoriteList />
    </div>
  );
};

export default App;
