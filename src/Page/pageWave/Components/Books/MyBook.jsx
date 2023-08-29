import React, { useState } from 'react';
import girl from '../../../../assets/img/girlLoad.png';
import BookDropdown from './BookDropdown '; // Ajusta la ruta según tu estructura de archivos

const MyBook = (props) => {
  const { books } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState(books[currentIndex]);
  const [searchBy, setSearchBy] = useState('title'); // Predeterminado a búsqueda por título

  const handleBookSelect = (item, searchType) => {
    const selected = searchType === 'title' ? books.find(book => book.Title === item) : books.find(book => book.Author === item);
    setSelectedBook(selected);
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
    setCurrentIndex(0); // Restablecer el índice al cambiar la opción de búsqueda
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    setSelectedBook(books[(currentIndex + 1) % books.length]);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
    setSelectedBook(books[(currentIndex - 1 + books.length) % books.length]);
  };

  return (
    <div>
      <div className='demoPage'>
      <h1 className='Resource_title'>Referencias</h1> 
        <div className="contaiter_select">
          <label htmlFor="searchBySelect">Buscar por:</label>
          <select id="searchBySelect" value={searchBy} onChange={handleSearchByChange}>
            <option value="title">Título</option>
            <option value="author">Autor</option>
          </select>
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
        <div className='Container_buttons'>
          <button  class="btn mt-4" onClick={handlePrevious}>Lectura Anterior</button>
          <button class="btn mt-4" onClick={handleNext}>Siguiente Lectura</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyBook;







