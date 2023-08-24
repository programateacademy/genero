import React, { useState } from 'react';

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchConfirm = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input 
        className='Input_search'
        type="text"
        placeholder="Buscar por título o autor"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchConfirm}>Buscar</button>
    </div>
  );
};

export default BookSearch;
