import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ddd',
          width: '300px',
          marginRight: '10px',
        }}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari resep masakan kesukaan anda ..."
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: '#4a90e2',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
