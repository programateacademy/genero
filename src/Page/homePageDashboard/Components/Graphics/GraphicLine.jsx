import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import './GraphicLine.css';

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

const GraphicLine = ({ jsonData }) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  // Filtrar datos según el año seleccionado
  const filteredData = jsonData.filter(item => item.fecha.includes(selectedYear));

  // Obtener las cantidades correspondientes a los datos filtrados
  const Estrato = ["En inclusión Social", "Estrato 1", "Estrato 2", "Estrato 3", "Estrato 4", "Estrato 5", "Habitabilidad de calle", "Sin información disponible"];
  const Cantidad = filteredData.map(item => Estrato (item));

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

  const handleYearChange = (year) => {
    setSelectedYear(year);
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

      {/* Botones para cambiar el año */}
      <div>
        <button onClick={() => handleYearChange("2019")}>2019</button>
        <button onClick={() => handleYearChange("2020")}>2020</button>
        <button onClick={() => handleYearChange("2021")}>2021</button>
        <button onClick={() => handleYearChange("2022")}>2022</button>
        <button onClick={() => handleYearChange("2023")}>2023</button>
      </div>
    </div>
  );
};

export default GraphicLine;
