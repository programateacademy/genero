import React from "react";
import './SecondGraphic.css'; // Agrega la importación directa
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


const SecondGraphic = ({selectedAñoContent}) => {
    const Tipo = selectedAñoContent.map((item) => item.tipo);;
    const conteoTipo = Tipo.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});

  const tipo = Object.keys(conteoTipo);
  const Cantidad = Object.values(conteoTipo);

  console.log(tipo); 
  console.log(Cantidad)

    const data = {
      labels: tipo,
      datasets: [
        {
          label: "Numero de casos totales",
          data: Cantidad,
          borderColor: ["rgba(49, 140, 231, 1)", "rgba(196, 147, 195, 1)", "rgba(106, 169, 233, 1)", "rgba(224, 176, 255, 1)"],
          borderWidth: 2,
          backgroundColor: ["rgba(49, 140, 231, 1)", "rgba(196, 147, 195, 1)", "rgba(106, 169, 233, 1)", "rgba(224, 176, 255, 1)"],
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
      <div className="tittleGraphicTwo">
        { }
        <div className="tittleTwo">
          <div className="textTitleTwo">
            <h3>Tipo de Asistencia</h3>
          </div>
        </div>
  
        { }
        <div className="containerGraphicTwo">
          { }
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default SecondGraphic;