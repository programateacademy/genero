import image from "../../../assets/img/image2.png"
import "./Container.css"

const Container = ()=>{
    return(
        <section className="container" id="waves">
        <div className="image">
            <img alt="img" src={image}/>
        </div>
        <h2>OLEADA #1</h2>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas 
            y archivos de texto. Lorem Ipsum ha sido el texto de relleno 
            estándar de las industrias desde el año 1500, cuando un impresor 
            (N. del T. persona que se dedica a la imprenta) desconocido usó 
            una galería de textos y los mezcló de tal manera que logró hacer 
            un libro de textos especimen.</p>
        <a href="" className="button-flex">Profundizar</a>
        </section>
    );
};

export default Container;