import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Kirim query pencarian ke App.js
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{padding:'10px', borderRadius:'20px', border:'none', width:"300px", marginRight:"10px"}}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari resep masakan kesukaan anda ..."
      />
      <button type="submit" style={{padding:"10px", borderRadius:"20px", border:"none", backgroundColor:"#d7096c", color:"white", cursor:"pointer"}}>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </form>
  );
};

export default SearchBar;
