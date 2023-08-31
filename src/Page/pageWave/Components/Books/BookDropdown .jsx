import React, { useState, useEffect } from 'react';
import '../../styles.css'

const BookDropdown = ({ books, onBookSelect, searchBy }) => {
  const [selectedItem, setSelectedItem] = useState(
    searchBy === 'title' ? books[0].Title : books[0].Author
  );

  useEffect(() => {
    setSelectedItem(searchBy === 'title' ? books[0].Title : books[0].Author);
  }, [books, searchBy]);

  const handleItemChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
    onBookSelect(selectedItem, searchBy);
  };

  const items = searchBy === 'title' ? books.map(book => book.Title) : books.map(book => book.Author);

  return (
    <div className='Select_drop'>
      <label htmlFor="itemSelect">
        Selecciona {searchBy === 'title' ? 'un libro' : 'un(a) autor(a)'}:
      </label>
      <select id="itemSelect" value={selectedItem} onChange={handleItemChange} className='custom-select'>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookDropdown;

