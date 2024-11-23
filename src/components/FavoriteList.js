import React from 'react';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteList = ({ favorites, removeFromFavorites }) => {
  const itemsPerPage = 3; // Jumlah item per halaman
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  // Data untuk halaman saat ini
  const currentItems = favorites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        <p>Anda belum memiliki resep favorit.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '40px', padding: '20px' }}>
      <h2 style={{ color: '#4a90e2', fontSize: '1.8rem', textAlign: 'center', marginBottom: '20px' }}>
        Resep Favorit Anda
      </h2>
      <div
        className="favorite-list"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {currentItems.map((recipe, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
            <div style={{ padding: '15px', display: "flex", justifyContent:"space-between", flexDirection:"column" }}>
              <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{recipe.label}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {recipe.cuisineType.join(', ')} | {recipe.dishType}
              </p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                <FontAwesomeIcon icon={faUtensils} style={{ color: '#c8cfff' }} />{' '}
                {recipe.calories.toFixed(2)} kcal
              </p>
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 20px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#4a90e2',
                  borderRadius: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                View Recipe
              </a>
              <button
                onClick={() => removeFromFavorites(recipe)}
                style={{
                  padding: '10px 20px',
                  textDecoration: 'none',
                  backgroundColor: '#d9534f',
                  borderRadius: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Remove from Favorite
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: '1px solid #4a90e2',
              backgroundColor: currentPage === index + 1 ? '#4a90e2' : 'white',
              color: currentPage === index + 1 ? 'white' : '#4a90e2',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
