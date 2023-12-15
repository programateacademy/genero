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

const SexualOrientationGraphic = () => {

    const sexuality = ["Heterosexual", "Bisexual", "Lesbiana", "Gay", "Sin información disposnible", "NS / NR"];
    const quantity = [50060, 2020, 1525, 703, 192, 58];
    const data = {
        labels: sexuality,
        datasets:[
            {
                Label: "Número de casos totales",
                data: quantity,
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