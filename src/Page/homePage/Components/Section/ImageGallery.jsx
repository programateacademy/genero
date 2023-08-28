import React, { useState, useEffect } from 'react';


const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambio cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images]);

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Mujeres ${index + 1}`}
          className={index === currentIndex ? '' : 'hidden'}
        />
      ))}
    </div>
  );
};

export default ImageGallery;



