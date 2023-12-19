import React from "react";
import './SexGraphic.css';
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

const SexGraphic = ({selectedAñoContent}) => {
    const Sexo = selectedAñoContent.map((item) => item.sexo);;
    const conteoSexo =  Sexo.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});
    
        // Configuración de resultados
    const sexo = Object.keys(conteoSexo);
    const Cantidad = Object.values(conteoSexo);

    console.log(sexo); // Array de elementos únicos en estrato
    console.log(Cantidad)

    const data = {
        labels: sexo,
        datasets:[ 
            {
              label: "Número de casos totales",
              data: Cantidad,
              borderColor: ["rgba(49, 140, 231, 1)"],
              backgroundColor: ["rgba(49, 140, 231, 1)"],
              borderWidth: 2,
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
      <div className="sexGraphic">
        {/*Graphic sign*/}
        <div className="sexTittleOne">
          <div className="sexTextOne">
            <h3>Sexo</h3>
          </div>
        </div>

        {/* Graphic container*/}
        <div className="sexGraphicContainer">
          {/* Graphic */}
          <Line data={data} options={options}/>
        </div>
      </div>
    );
};


export default SexGraphic;