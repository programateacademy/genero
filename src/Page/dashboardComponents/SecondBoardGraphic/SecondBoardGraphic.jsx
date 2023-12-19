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
  const SecondBoardGraphic = ({selectedAñoContent}) => {
      const Edad = selectedAñoContent.map((item) => item.grupo_edad);;
      const conteoEdad = Edad.reduce((acc, elemento) => {
        acc[elemento] = (acc[elemento] || 0) + 1;
        return acc;
      }, {});
  
    const edad = Object.keys(conteoEdad);
    const Cantidad = Object.values(conteoEdad);
  
    console.log(edad); 
    console.log(Cantidad)
  
    const data = {
      labels: edad,
      datasets: [
        {
          label: "Edad",
          data: Cantidad,
          backgroundColor: '#6AA9E9',      
          
        },
      ],
    };
  
    const options = {
      responsive: true,
      indexAxis: "y", 
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