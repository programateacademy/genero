import React from "react";
import './IdentityGraphic.css'; // Agrega la importación directa
import { Bar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Title,
  Legend,
  Filler
);


const IdentityGraphic = ({selectedAñoContent}) => {
    const Genero =  selectedAñoContent.map((item) => item.identidad);;
    const conteoGenero =  Genero.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});

    const genero = Object.keys(conteoGenero);
    const Cantidad = Object.values(conteoGenero);

    console.log(genero); 
    console.log(Cantidad)

    
    const data = {
      labels: genero,
      datasets: [
        {
          label: "Numero de casos totales",
          data: Cantidad,
          borderColor: '#E0B0FF',
          borderWidth: 2,
          backgroundColor: '#E0B0FF',
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
      <div className="tittleGraphicGenero">
        { }
        <div className="tittleGenero">
          <div className="textTitleGenero">
            <h3>Identidad de Genero</h3>
          </div>
        </div>
        { }
        <div className="containerGraphicGenero">
          { }
          <Bar data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default IdentityGraphic; 
