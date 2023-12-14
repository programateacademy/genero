import React from "react";
import './BoardGraphic.css';
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
  const BoardGraphic = () => {
    const Localidad = ["Martires", "Bosa", "Ciudad Bolivar ", "Kennedy", "Rafael Uribe Uribe ", "San Cristobal", "Santa Fé", "Usme", "Suba", "Engativa", "Tunjuelito", "Fuera de Bogotá", "Chapinero", "Barrios Unidos", "Fontibón", "Usaquén", "Puente Aranda", "Antonio Nariño", "Sin información disponible", "La candelaria", "Teusaquillo"];
    const Registro = [2000, 1800, 800, 700, 600, 500, 1000, 1000, 800, 200, 40, 30, 20, 50, 15, 10];
  
    const data = {
      labels: Localidad,
      datasets: [
        {
          label: "Localidad",
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
  
      <div className="container-Localidad">           
      <div>    
      <br></br><br></br>   
      <h1 id = "Localidad"  >Detalle por Localidad</h1>
        <Bar options={options} data={data} />
      </div>
      </div>
      
      
      
      
    );
  };
  
export default BoardGraphic;