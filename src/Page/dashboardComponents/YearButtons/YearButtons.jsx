import React, {useState} from "react";
import './YearButtons.css'; // Agrega la importación directa
import data from '../../../assets/Services/Data/Data.json';

function YearButtons () {
  const [selectedAño, setselectedAño] = useState(null);
  const SelectedAño = (item) =>{
    setselectedAño(item);
  }

const selectedAñoData = data.find((item) => item.año === selectedAño);
console.log(selectedAñoData);


return(
  <div className="ButtonsContainer">
      {/* Primer boton */}s
      <div className="ButtonOne">
        <button className="textButtonOne"  text="2019" onclick={() => SelectedAño(`2019`)}/>
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
};


export default YearButtons;
