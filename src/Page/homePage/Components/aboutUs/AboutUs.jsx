import image from "../../../../assets/img/enf.png"

const ImageWithOverlay = ({ imageUrl, overlayText }) => {
  return (
    <div className="image-with-overlay">
      <img src={image} alt="Imagen" className="image-with-overlay-image" />
      <div className="image-with-overlay-overlay">
        <h6>SOBRE</h6>
        <h3>EducaMás</h3> 
        <h6>Es una organización sin ánimo de lucro con 10 años de experiencia, 
            apoyando estudiantes colombianos a acceder, permanecer, graduarse de sus programa 
            de educación para emplearse. Hemos logrado: 
            Alianzas con 20 Instituciones Educativas.
            4% de deserción.
            Contamos con una red de más de 100 mentores. 
            Hemos llegado al 69% del país con nuestros programas.
        </h6>
      </div>
    </div>
  );
};

export default ImageWithOverlay;