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


const GraphicCondition = ({selectedAñoContent}) => {
    const Discapacidad = selectedAñoContent.map((item) => item.discapacidad);;
    const conteoDiscapacidad = Discapacidad.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});

    const discapacidad = Object.keys(conteoDiscapacidad);
    const Cantidad = Object.values(conteoDiscapacidad);

    
    console.log(discapacidad); // Array de elementos únicos en estrato
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
