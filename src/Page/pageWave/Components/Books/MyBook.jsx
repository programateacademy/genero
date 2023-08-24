import React, { useState } from 'react';

const MyBook = React.forwardRef((props, ref) => {
  const { books } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? books.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === books.length - 1 ? 0 : prevIndex + 1));
  };

  const currentBook = books[currentIndex];

  return (
    <div className='demoPage' ref={ref}>
      <h4>Título: {currentBook.Title}</h4>
      <p>Sinopsis: {currentBook.Synopsis}</p>
      <p>Autor: {currentBook.Author}</p>
      <div className='Container'>
        <iframe
          className='Iframe'
          title={currentBook.Title}
          src={currentBook.Flipbook}
          allowFullScreen="true"
        ></iframe>
      </div>
      <button onClick={handlePrevClick}>Anterior</button>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  );
});

export default MyBook;
