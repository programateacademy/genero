import React from "react";
import './SecondBoardGraphic.css';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Legend,
    Filler,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Legend,
    Filler
  );
  const SecondBoardGraphic = () => {
    const Edad = ["25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100+", "Sin información"];
    const Registro = [2000, 1800, 800, 700, 600, 500, 1000, 1000, 800, 200, 40, 30, 20, 50, 15, 10];
  
    const data = {
      labels: Edad,
      datasets: [
        {
          label: "Edad",
          data: Registro,
          backgroundColor: '#E0B0FF', // Color de fondo de las barras        
          
        },
      ],
    };
  
    const options = {
      responsive: true,
      indexAxis: "y", // Establecer el eje a 'y' para barras horizontales
    };
  
    return (    
  
      <div className="container-Edad">           
      <div>           
      <h1 id = "Edad"  >Grupos Edad</h1>
        <Bar options={options} data={data} />
      </div>
      </div>
      
      
      
      
    );
  };
export default SecondBoardGraphic;