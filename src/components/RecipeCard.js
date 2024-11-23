import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RecipeCard = ({ recipe, addToFavorites }) => {
  return (
    <div
      className="recipe-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        margin: '15px',
        width: '300px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.label}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '15px' }}>
        <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{recipe.label}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          {recipe.cuisineType.join(', ')} | {recipe.dishType}
        </p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          <FontAwesomeIcon icon={faUtensils} style={{ color: '#c8cfff' }} />{' '}
          {recipe.calories.toFixed(2)} kcal
        </p>
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginTop: '10px' }}>
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              textDecoration: 'none',
              backgroundColor: '#4a90e2',
              borderRadius: '20px',
              color: 'white',
              fontWeight: 'bold',
              textAlign: "center"
            }}
          >
            View Recipe
          </a>
          <button
            onClick={addToFavorites}
            style={{
              padding: '10px 20px',
              textDecoration: 'none',
              backgroundColor: '#fff',
              borderRadius: '20px',
              color: '#4a90e2',
              fontWeight: 'bold',
              marginTop: "10px",
              border: "1px solid #4a90e2"
            }}
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
