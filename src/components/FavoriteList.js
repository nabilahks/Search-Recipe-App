import React, { useEffect, useState } from 'react';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Jumlah item per halaman

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

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
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{recipe.ingredientLines.join(', ')}</p>
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
