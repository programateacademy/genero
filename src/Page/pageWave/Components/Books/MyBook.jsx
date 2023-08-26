import React, { useState } from 'react';
import girl from '../../../../assets/img/girlLoad.png';
import BookDropdown from '../Books/BookDropdown '; 

const MyBook = React.forwardRef((props, ref) => {
  const { books } = props;
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [searchBy, setSearchBy] = useState('title'); // Predeterminado a búsqueda por título

  const handleBookSelect = (item, searchType) => {
    const selected = searchType === 'title' ? books.find(book => book.Title === item) : books.find(book => book.Author === item);
    setSelectedBook(selected);
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  return (
    <div>
      <div className='demoPage' ref={ref}>
        <div>
          <label htmlFor="searchBySelect">Buscar por:</label>
          <select id="searchBySelect" value={searchBy} onChange={handleSearchByChange}>
            <option value="title">Título</option>
            <option value="author">Autor</option>
          </select>
        </div>
        <div>
          <BookDropdown books={books} onBookSelect={handleBookSelect} searchBy={searchBy} />
        </div>
        <h4>Título: {selectedBook.Title}</h4>
        <p className='Text_author'>Autor: {selectedBook.Author}</p>
        <p className='Text_Synopsis'>Sinopsis: {selectedBook.Synopsis}</p>
        <div className='Container_book'>
          {selectedBook.Flipbook !== 'Not_available' ? (
            <iframe
              className='Iframe'
              title={`Iframe for ${selectedBook.Title}`}
              src={selectedBook.Flipbook}
              allowFullScreen={true}
            ></iframe>
          ) : (
            <div className='Container_Load'>
              <img className="Image_load" src={girl} alt="Imagen de carga"/>
              <a href={selectedBook.Link} target="_blank" rel="noopener noreferrer">
                Archivo no disponible, accede a él aquí
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default MyBook;








