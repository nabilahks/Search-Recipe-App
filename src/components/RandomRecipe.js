import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RandomRecipe = ({ recipe, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '15px',
          width: '90%',
          maxWidth: '600px', // Maksimal lebar modal
          textAlign: 'center',
          position: 'relative', // Posisi relatif untuk tombol close
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#d7096c',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Konten Modal */}
        <img
          src={recipe.image}
          alt={recipe.label}
          style={{
            width: '100%',
            height: '250px', // Tinggi gambar lebih proporsional
            objectFit: 'cover',
            borderRadius: '15px',
            marginBottom: '20px',
          }}
        />
        <h1 style={{ color: '#4a90e2', marginBottom: '10px' }}>{recipe.label}</h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          {recipe.cuisineType.join(', ')} | {recipe.dishType}
        </p>
        <p style={{ fontSize: '1rem', margin: '10px 0', color: '#333' }}>
          <strong>Calories:</strong> {recipe.calories.toFixed(2)} kcal
        </p>
        <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#333' }}>Ingredients:</h3>
        <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '90%' }}>
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index} style={{ marginBottom: '5px', color: '#555' }}>
              {ingredient}
            </li>
          ))}
        </ul>
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            textDecoration: 'none',
            backgroundColor: '#4a90e2',
            color: 'white',
            borderRadius: '20px',
            marginTop: '20px',
            fontWeight: 'bold',
          }}
        >
          View Full Recipe
        </a>
      </div>
    </div>
  );
};

export default RandomRecipe;
