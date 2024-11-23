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
    <div style={{ marginTop: '40px' }}>
      <h2 style={{ color: '#4a90e2', fontSize: '1.8rem', marginBottom: '20px' }}>
        Resep Favorit Anda
      </h2>
      <div className="favorite-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favorites.map((recipe, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              margin: '15px',
              width: '300px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
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
                {recipe.ingredientLines.join(', ')}
              </p>
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
                }}
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
