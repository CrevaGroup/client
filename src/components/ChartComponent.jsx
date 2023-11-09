import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ChartComponent() {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
  const chartInstance3 = useRef(null);
  const chartInstance4 = useRef(null);

  useEffect(() => {
    const resizeCanvas = () => {
      const windowWidth = window.innerWidth;
      const mobileWidth = 640;
      const canvasWidth = Math.min(windowWidth, mobileWidth);

      // Ajusta la altura de las gráficas en función del ancho
      const canvasHeight = canvasWidth * 0.48; // Puedes ajustar este valor

      chartRef1.current.width = canvasWidth;
      chartRef1.current.height = canvasHeight;
      chartRef2.current.width = canvasWidth;
      chartRef2.current.height = canvasHeight;
      chartRef3.current.width = canvasWidth;
      chartRef3.current.height = canvasHeight;
      chartRef4.current.width = canvasWidth;
      chartRef4.current.height = canvasHeight;

      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
      if (chartInstance3.current) {
        chartInstance3.current.destroy();
      }
      if (chartInstance4.current) {
        chartInstance4.current.destroy();
      }

      const ctx1 = chartRef1.current.getContext("2d");
      chartInstance1.current = new Chart(ctx1, {
        type: "bar",
        data: {
          labels: ["Producto 1", "Producto 2", "Producto 3"],
          datasets: [
            {
              label: "Empresa 1",
              data: [12, 19, 3],
              backgroundColor: "rgba(105, 2, 392, 0.2)",
              borderColor: "rgba(5, 2, 2, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      const ctx2 = chartRef2.current.getContext("2d");
      chartInstance2.current = new Chart(ctx2, {
        type: "bar",
        data: {
          labels: ["Producto A", "Producto B", "Producto C"],
          datasets: [
            {
              label: "Empresa 2",
              data: [8, 15, 5],
              backgroundColor: "rgba(2, 105, 392, 0.2)",
              borderColor: "rgba(5, 2, 2, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      const ctx3 = chartRef3.current.getContext("2d");
      chartInstance3.current = new Chart(ctx3, {
        type: "bar",
        data: {
          labels: ["Producto X", "Producto Y", "Producto Z"],
          datasets: [
            {
              label: "Empresa 3",
              data: [10, 8, 12],
              backgroundColor: "rgba(25, 155, 15, 0.2)",
              borderColor: "rgba(5, 2, 2, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      const ctx4 = chartRef4.current.getContext("2d");
      chartInstance4.current = new Chart(ctx4, {
        type: "bar",
        data: {
          labels: ["Producto M", "Producto N", "Producto O"],
          datasets: [
            {
              label: "Empresa 4",
              data: [14, 7, 9],
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              borderColor: "rgba(5, 2, 2, 1)",
              borderWidth: 1,
            },
          ],
        },
      });
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-1 p-4">
        <canvas ref={chartRef1}></canvas>
      </div>
      <div className="md:col-span-1 p-4">
        <canvas ref={chartRef2}></canvas>
      </div>
      <div className="md:col-span-1 p-4">
        <canvas ref={chartRef3}></canvas>
      </div>
      <div className="md:col-span-1 p-4">
        <canvas ref={chartRef4}></canvas>
      </div>
    </div>
  );
}

export default ChartComponent;
