import React from "react";
import './Graphics.css'; 
import { Line } from "react-chartjs-2";
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


const Graphics = ({selectedAñoContent}) => {
  const estrato = selectedAñoContent.map((item) => item.Estrato);
  const conteoEstrato = estrato.reduce((acc, elemento) => {
    acc[elemento] = (acc[elemento] || 0) + 1;
    return acc;
  }, {});
  
  const Estrato = Object.keys(conteoEstrato);
  const Cantidad = Object.values(conteoEstrato);
  
  console.log(Estrato); 
  console.log(Cantidad)
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
      {/* Graphics Sign */}
      <div className="tittleOne">
        <div className="textTitleOne">
          <h3>Estrato Socioeconómico</h3>
        </div>
      </div>

      {/* Graphic container */}
      <div className="containerGraphic">
        {/*Graphic */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graphics;