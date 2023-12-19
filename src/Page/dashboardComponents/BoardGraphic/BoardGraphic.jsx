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
  const BoardGraphic = ({selectedAñoContent}) => {
    const Localidad = selectedAñoContent.map((item) => item.localidad);
    const conteoLocalidad = Localidad.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});

     // Results configuration
    const localidad = Object.keys(conteoLocalidad);
    const Cantidad = Object.values(conteoLocalidad);

    console.log(localidad); // Array of single elements in stratum
    console.log(Cantidad)



    const data = {
      labels: localidad,
      datasets: [
        {
          label: "Localidad",
          data: Cantidad,
          backgroundColor: '#E0B0FF', // Background color of the bars            
          
        },
      ],
    };
  
    const options = {
      responsive: true,
      indexAxis: "y", // Set axis to 'y' for horizontal bars
    };
  
    return (    
  
      <div className="container-Localidad">           
      <div>    
      <br></br>  
      <h1 id = "Localidad"  >Detalle por Localidad</h1>
        <Bar options={options} data={data} />
      </div>
      </div>
      
      
      
      
    );
  };
  
export default BoardGraphic;