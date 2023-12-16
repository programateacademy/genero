import React from "react";
import './Download.css'; // Agrega la importación directa
import imagenone from "../Download/imagenone.png";
import imagentwo from "../Download/imagentwo.png";

const Download = () => {
  return (
    <div className="tittleDownload">
      {/* Letrero de la Gráfica */}
      <div className="tittleDownloadOne">
        <div className="textDownload">
          <h3>Descarga</h3>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="containerMain">
        {/* Contenedor de texto */}
        <div className="containerDownload">
          {/* Parrafo 1 */}
          <div className="textDownloadOne">
            <p>
              Tendiendo lineamientos de Datos Abiertos de acuerdo a la
              normativa más reciente de Gobierno Digital, los datos utilizados para
              la construcción de este tablero se encuentran consolidados y disponibles para ser
              usados por la ciudadanía.
            </p>
          </div>

          {/* Parrafo 2 */}
          <div className="textDownloadTwo">
            <p>
              Los datos corresponden a atenciones a la ciudadanía, donde
              una misma persona puede contarse varias veces si ella acudió a
              los servicios de la SDMujer en más de una ocasión. Fuente: Simisional -
              SDMujer. cifras preliminares sujetas a modificaciones.
            </p>
          </div>
        </div>

        {/* Contenedor de imágenes */}
        <div className="imageContainer">
          <img src={imagenone} alt="Descripción de la primera imagen" />
          <img src={imagentwo} alt="Descripción de la segunda imagen" />
        </div>
      </div>
    </div>
  );
}

export default Download;
