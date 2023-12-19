import React from "react";
import './SexualOrientationGraphic.css';
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

const SexualOrientationGraphic = ({selectedAñoContent}) => {

    const Sexualialidad = selectedAñoContent.map((item) => item.orienta);;
    const conteoSexualidad = Sexualialidad.reduce((acc, elemento) => {
        acc[elemento] = (acc[elemento] || 0) + 1;
        return acc;
      }, {});

    // Results configuration
    const sexualidad = Object.keys(conteoSexualidad);
    const Cantidad = Object.values(conteoSexualidad);

    console.log(sexualidad); // Array of single elements in stratum
    console.log(Cantidad)

    
    const data = {
        labels: sexualidad,
        datasets:[
            {
                Label: "Número de casos totales",
                data: Cantidad,
                borderColor: ["rgba(232, 174, 230, 100)"],
                backgroundColor: ["rgba(232, 174, 230, 100)"],
                borderWidth: 2,
            },
        ],
    }

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

    return(


        <div className="sexualOrientationGraphic">
            {/*Graphic sign*/}
            <div className="sexualOrientationGraphicTittleOne">
                <div className="sexualOrientationGraphicTextOne">
                    <h3>Orientación sexual</h3>
                </div>
            </div>

            {/* Graphic container*/}
            <div className="sexualOrientationGraphicContainer">
                {/* Graphic */}
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default SexualOrientationGraphic;