import React from "react";
import './YearButtons.css'; // Agrega la importación directa

const YearButtons = () => {
  return (
    <div className="ButtonsContainer">
      {/* Primer boton */}
      <div className="ButtonOne">
        <div className="textButtonOne">
          <h3>2019</h3>
        </div>
      </div>

      {/* Segundo boton */}
      <div className="ButtonTwo">
        <div className="textButtonTwo">
          <h3>2020</h3>
        </div>
      </div>

      {/* Tercer boton */}
      <div className="ButtonThree">
        <div className="textButtonThree">
          <h3>2021</h3>
        </div>
      </div>

      {/* Cuarto boton */}
      <div className="ButtonFour">
        <div className="textButtonFour">
          <h3>2022</h3>
        </div>
      </div>

      {/* Quinto boton */}
      <div className="ButtonFive">
        <div className="textButtonFive">
          <h3>2023</h3>
        </div>
      </div>

    </div>
  );
}


export default YearButtons;
