import React from 'react';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecipeCard = ({ recipe, addToFavorites }) => {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.label} />
      <div className="card-content">
        <h3 className="card-title">{recipe.label}</h3>
        <p className="card-text">
          {recipe.cuisineType.join(', ')} | {recipe.dishType}
        </p>
        <p className="card-text">
          <FontAwesomeIcon icon={faUtensils} style={{ color: '#c8cfff' }} />{' '}
          {recipe.calories.toFixed(2)} kcal
        </p>
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Recipe
        </a>
        <button
          onClick={addToFavorites}
          className="btn btn-outline"
        >
          Add to Favorite
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
