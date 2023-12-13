import React from "react";
import './GraphicPie.css'; // Agrega la importación directa
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


const GraphicPie = () => {
    const Estrato = ["Intervenciones Sociales", "Primeras Atenciones", "Psicosocial", "Sociojurídicas"];
    const Cantidad = [23493, 5493, 10030, 15536];
    const data = {
      labels: Estrato,
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
        {/* Letrero de la Gráfica */}
        <div className="tittleTwo">
          <div className="textTitleTwo">
            <h3>Tipo de Asistencia</h3>
          </div>
        </div>
  
        {/* Contenedor de Gráfica */}
        <div className="containerGraphicTwo">
          {/* Gráfica */}
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default GraphicPie; 
  