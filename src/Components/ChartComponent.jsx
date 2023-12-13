import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo (puedes sustituirlos por tus propios datos)
    const data = {
      labels: ['Daño 1', 'Daño 2', 'Daño 3', 'Daño 4'],
      datasets: [
        {
          label: 'Cantidad de Daño 1',
          data: [12, 19, 3, 5],
          backgroundColor: 'rgba(128, 0, 128, 0.5)', // Morado
          borderColor: 'rgba(128, 0, 128, 1)',
          borderWidth: 1,
        },
        {
          label: 'Cantidad de Daño 2',
          data: [8, 15, 7, 10],
          backgroundColor: 'rgba(255, 182, 193, 0.5)', // Rosado
          borderColor: 'rgba(255, 182, 193, 1)',
          borderWidth: 1,
        },
        {
          label: 'Cantidad de Daño 3',
          data: [5, 10, 5, 8],
          backgroundColor: 'rgba(186, 85, 211, 0.5)', // Morado
          borderColor: 'rgba(186, 85, 211, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Destruir el gráfico existente si hay uno
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Crear el gráfico
    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'bar', // Puedes cambiar el tipo de gráfico (bar, line, etc.)
      data: data,
      options: options,
    });

    // Guardar la instancia del gráfico para su destrucción posterior
    chartInstanceRef.current = newChartInstance;
  }, []);

  return (
    <div className="chart-container">
      <h1 className="chart-title">Gráfico de Daños</h1>
      <div className="chart-wrapper">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default ChartComponent;
