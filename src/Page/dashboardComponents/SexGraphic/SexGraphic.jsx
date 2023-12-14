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

const SexGraphic = () => {

    const sex = ["Mujer", "Hombre", "Intersexual", "Sin información disponible", "NS / NR"];
    const quantity =[51772, 2447, 235, 97, 2];
    const data = {
        labels: sex,
        datasets:[ 
            {
              label: "Número de casos totales",
              data: quantity,
              borderColor: ["rgba(49, 140, 231, 1)"],
              backgroundColor: ["rgba(49, 140, 231, 1)"],
              borderWidth: 2,
            },
        ],
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
          <Line data={data} />
        </div>
      </div>
    );
};


export default SexGraphic;