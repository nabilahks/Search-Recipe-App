import React, { useEffect, useState } from 'react';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <div className="favorite-list">
        {favorites.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.label} />
            <h3>{recipe.label}</h3>
            <p>{recipe.ingredientLines.join(', ')}</p>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
