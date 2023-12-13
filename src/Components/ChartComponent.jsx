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
          label: 'Cantidad de Daño',
          data: [12, 19, 3, 5],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
    <div>
      <h1>Gráfico de Daños</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default ChartComponent;

