import React from "react";
import './Download.css'; 
import imagenone from "../Download/imagenone.png";
import imagentwo from "../Download/imagentwo.png";

const Download = () => {
  return (
    <div className="tittleDownload">
      {/* Graphic design */}
      <div className="tittleDownloadOne">
        <div className="textDownload">
          <h3>Descarga</h3>
        </div>
      </div>

      {/* Principal graphic */}
      <div className="containerMain">
        {/* Text container */}
        <div className="containerDownload">
          {/* Text one */}
          <div className="textDownloadOne">
            <p>
              Tendiendo lineamientos de Datos Abiertos de acuerdo a la
              normativa más reciente de Gobierno Digital, los datos utilizados para
              la construcción de este tablero se encuentran consolidados y disponibles para ser
              usados por la ciudadanía.
            </p>
          </div>

          {/* Second text */}
          <div className="textDownloadTwo">
            <p>
              Los datos corresponden a atenciones a la ciudadanía, donde
              una misma persona puede contarse varias veces si ella acudió a
              los servicios de la SDMujer en más de una ocasión. Fuente: Simisional -
              SDMujer. cifras preliminares sujetas a modificaciones.
            </p>
          </div>
        </div>

        {/* Pictures container */}
        <div className="imageContainer">
          <img src={imagenone} alt="Descripción de la primera imagen" />
          <img src={imagentwo} alt="Descripción de la segunda imagen" />
        </div>
      </div>
    </div>
  );
}

export default Download;
