import React from "react";
import './TotalAttention.css'; // Agrega la importación directa

const TotalAttention = () => {
  return (
    <div className="containerWrapper">
      {/* Primer contenedor */}
      <div className="containerTotal">
        <div className="textAttention">
          <h2> Atenciones Totales</h2>
        </div>
      </div>

      {/* Contenedor 2 y 3 en una fila */}
      <div className="containerRow">
        {/* Segundo contenedor */}
        <div className="containerTotales">
          <div className="textTotal">
            <h3>Total del 2019 al 2023</h3>
          </div>
        </div>

        {/* Tercer contenedor */}
        <div className="containerNumber">
          <div className="textNumber">
            <h3>54.552</h3>
          </div>
        </div>
      </div>

      {/* Contenedor 4 y 5 en una fila, debajo de la fila anterior */}
      <div className="containerRow">
        {/* Cuarto contenedor */}
        <div className="containerfilter">
          <div className="textfilter">
            <h3>Total año filtrado</h3>
          </div>
        </div>

        {/* Quinto contenedor */}
        <div className="containerfilterTotal">
          <div className="textfilterTotal">
            <h3>0</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalAttention;
