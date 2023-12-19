import React from "react";
import './ConditionGraphic.css';
import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  Filler
);


const ConditionGraphic = ({selectedAñoContent}) => {
    const Discapacidad = selectedAñoContent.map((item) => item.discapacidad);;
    const conteoDiscapacidad = Discapacidad.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});

    const discapacidad = Object.keys(conteoDiscapacidad);
    const Cantidad = Object.values(conteoDiscapacidad);

    
    console.log(discapacidad); // Array of single elements in stratum
    console.log(Cantidad)



    const data = {
      labels: discapacidad,
      datasets: [
        {
          label: "Numero de casos totales",
          data: Cantidad,
          borderColor: ["rgba(224, 176, 255, 1)", "rgba(106, 169, 233, 1)"],
          borderWidth: 2,
          backgroundColor: ["rgba(224, 176, 255, 1)", "rgba(106, 169, 233, 1)"],
        },
      ],
    };
    
    const options = {
      responsive: true,

      plugins: {
        legend: {
          display: true,
        },
      },
    };
  
    return (
      <div className="tittleGraphicCondition">
        {/* Graphics Sign */}
        <div className="tittleCondition">
          <div className="textTitleCondition">
            <h3>Condición de Discapacidad</h3>
          </div>
        </div>
  
        {/* Graphic Container */}
        <div className="containerGraphicCondition">
          {/* Graphic */}
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default ConditionGraphic;
