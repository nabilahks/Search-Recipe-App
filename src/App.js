import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RandomRecipe from './components/RandomRecipe'; // Import komponen baru
import FavoriteList from './components/FavoriteList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false); 
  const [showFavorites, setShowFavorites] = useState(false); 
  const [favorites, setFavorites] = useState([]); // State untuk menyimpan favorit

  // Fungsi untuk mencari resep
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

  // Fungsi untuk mengambil resep acak
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
      setShowRandomRecipe(true);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    }
  };

  // Fungsi untuk menambahkan ke daftar favorit
  const addToFavorites = (recipe) => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = existingFavorites.some(
      (fav) => fav.label === recipe.label // Cek jika resep sudah ada di favorit
    );

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...existingFavorites, recipe];
      setFavorites(updatedFavorites); // Update state
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Simpan ke localStorage
      alert(`${recipe.label} berhasil ditambahkan ke favorit!`);
    } else {
      alert(`${recipe.label} sudah ada di daftar favorit!`);
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites); // Ambil data favorit dari localStorage
    }
  }, []);

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
            marginRight: "10px"
          }}
        >
          What to Cook Today?
        </button>
        <button
          onClick={() => setShowFavorites(!showFavorites)} 
          style={{
            padding: '10px 20px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: showFavorites ? '#d9534f' : '#4a90e2', 
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
      </div>
      {showRandomRecipe && randomRecipe && (
        <RandomRecipe
          recipe={randomRecipe}
          onClose={() => setShowRandomRecipe(false)}
        />
      )}
      <div className="recipe-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe.recipe}
            addToFavorites={() => addToFavorites(recipe.recipe)} // Panggil fungsi saat tombol diklik
          />
        ))}
      </div>
      {showFavorites && <FavoriteList favorites={favorites} />} {/* Kirim daftar favorit */}
    </div>
  );
};

export default App;
