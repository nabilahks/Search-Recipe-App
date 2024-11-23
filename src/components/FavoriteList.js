import React from 'react';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteList = ({ favorites, removeFromFavorites }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

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
          <div key={index} className="card">
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
                onClick={() => removeFromFavorites(recipe)}
                className="btn btn-danger"
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
            className={`btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
