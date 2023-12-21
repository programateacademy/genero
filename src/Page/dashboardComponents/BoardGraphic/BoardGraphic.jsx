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

     // Configuración de resultados
    const localidad = Object.keys(conteoLocalidad);
    const Cantidad = Object.values(conteoLocalidad);

    console.log(localidad); // Array de elementos únicos en estrato
    console.log(Cantidad)



    const data = {
      labels: localidad,
      datasets: [
        {
          label: "Localidad",
          data: Cantidad,
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
      <br></br>  
      <h1 id = "Localidad"  >Detalle por Localidad</h1>
        <Bar options={options} data={data} />
      </div>
      </div>
      
      
      
      
    );
  };
  
export default BoardGraphic;