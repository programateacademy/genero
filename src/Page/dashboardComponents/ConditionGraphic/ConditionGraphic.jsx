import React from "react";
import './ConditionGraphic.css'; // Agrega la importación directa
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


const GraphicCondition = () => {
    const Estrato = ["Si", "No"];
    const Cantidad = [2735, 51817];
    const data = {
      labels: Estrato,
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
        {/* Letrero de la Gráfica */}
        <div className="tittleCondition">
          <div className="textTitleCondition">
            <h3>Condicion de Discapacidad</h3>
          </div>
        </div>
  
        {/* Contenedor de Gráfica */}
        <div className="containerGraphicCondition">
          {/* Gráfica */}
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default GraphicCondition;
