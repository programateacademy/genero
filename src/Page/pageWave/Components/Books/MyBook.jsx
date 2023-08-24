import React, { useState } from 'react';
import jsonData from '../../../../json_books.json';

const MyBook = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Inicialmente muestra el primer elemento
  const totalItems = jsonData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const currentItem = jsonData[currentIndex];

  return (
    <div className='demoPage' ref={ref}>
      <p>Título: {currentItem.Title}</p>
      <p>Sinopsis: {currentItem.Synopsis}</p>
      <p>Autor: {currentItem.Author}</p>
      
      <div className='Container'>
      <button onClick={handlePrevious}>Anterior</button>
        {currentItem.Flipbook !== 'Not_available' ? (
          <iframe
            className='Iframe'
            title={`Iframe for ${currentItem.Title}`}
            src={currentItem.Flipbook}
            frameborder="0"
            allowFullScreen="true">
          </iframe>
        ) : (
          <a href={currentItem.Link} target="_blank" rel="noopener noreferrer">
            <button>Archivo no disponible, accede a el aquí</button>
          </a>
        )}
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
});

export default MyBook;