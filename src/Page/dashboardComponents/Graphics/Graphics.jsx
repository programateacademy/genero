import React from "react";
import './Graphics.css'; // Agrega la importación directa
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
  Filler
);


const GraphicLine = () => {
  const Estrato = ["En inclusión Social", "Estrato 1", "Estrato 2", "Estrato 3", "Estrato 4", "Estrato 5", "Habitabilidad de calle", "Sin información disponible"];
  const Cantidad = [2, 9071, 27084, 4748, 46, 18, 1, 13852];
  const data = {
    labels: Estrato,
    datasets: [
      {
        label: "Numero de casos totales",
        data: Cantidad,
        borderColor: ["rgba(49, 140, 231, 1)"],
        borderWidth: 2,
        backgroundColor: ["rgba(49, 140, 231, 1)"],
      },
    ],
  };

  const options = {
    responsive: true,

    scales: {
      y: {
        min: 0,
      },
    },


    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="tittleGraphic">
      {/* Letrero de la Gráfica */}
      <div className="tittleOne">
        <div className="textTitleOne">
          <h3>Estrato Socioeconómico</h3>
        </div>
      </div>

      {/* Contenedor de Gráfica */}
      <div className="containerGraphic">
        {/* Gráfica */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphicLine;