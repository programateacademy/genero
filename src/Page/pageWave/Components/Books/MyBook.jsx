import React, { useState, useEffect } from 'react';
import BookSearch from './BookSearch';

const MyBook = React.forwardRef((props, ref) => {
  const { books } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setCurrentIndex(0); // Reinicia currentIndex cuando se cambian los resultados filtrados
  }, [filteredBooks]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredBooks.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredBooks.length - 1 ? 0 : prevIndex + 1));
  };

  const currentBook = filteredBooks[currentIndex];

  const handleSearch = (searchTerm) => {
    const filteredResults = books.filter(
      (book) =>
        book.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.Author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredResults);
  };

  return (
    <div className='demoPage' ref={ref}>
      <BookSearch onSearch={handleSearch} />
      {filteredBooks.length > 0 ? (
        <div>
          <h4>Título: {currentBook.Title}</h4>
          <p className='Text_author'>Autor: {currentBook.Author}</p>
          <p className='Text_Synopsis'>Sinopsis: {currentBook.Synopsis}</p>
          <div className='Container_book'>
            {currentBook.Flipbook !== 'Not_available' ? (
              <iframe
                className='Iframe'
                title={`Iframe for ${currentBook.Title}`}
                src={currentBook.Flipbook}
                frameBorder="0"
                allowFullScreen="true"
              ></iframe>
            ) : (
              <a href={currentBook.Link} target="_blank" rel="noopener noreferrer">
                Archivo no disponible, accede a él aquí
              </a>
            )}
          </div>
          <button onClick={handlePrevClick}>Anterior</button>
          <button onClick={handleNextClick}>Siguiente</button>
        </div>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
});

export default MyBook;





