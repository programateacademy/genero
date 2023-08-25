import React, { useState } from 'react';
import girl from '../../../../assets/img/girlLoad.png'

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
      <p className='Text_author'>Autor: {currentBook.Author}</p>
      <p className='Text_Synopsis'>Sinopsis: {currentBook.Synopsis}</p>
      <div className='Container_book'>
      {currentBook.Flipbook !== 'Not_available' ? (
            <iframe
              className='Iframe'
              title={`Iframe for ${currentBook.Title}`}
              src={currentBook.Flipbook}
              allowFullScreen="true"
            ></iframe>
          ) : (
            <div className='Container_Load'>
            <img className="Image_load" src={girl} alt="Imagen de carga"/>
            <a href={currentBook.Link} target="_blank" rel="noopener noreferrer">Archivo no disponible, accede a él aquí</a>
            </div>
          )}
      </div>
      <button  className="button_books" onClick={handlePrevClick}>Anterior</button>
      <button className="button_books" onClick={handleNextClick}>Siguiente</button>
      
    </div>
  );
});

export default MyBook;





