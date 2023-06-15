import { useEffect, useRef } from "react";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import cell from "./data/cell";

const App = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const plantingChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Direct Seeding", "Transplanting", "Other Methods"],
            datasets: [
              {
                label: "Planting Methods",
                data: [60, 30, 10],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        return () => {
          plantingChart.destroy();
        };
      }
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div id="root">
        {/* FortuneSheet component or other content */}
        <Workbook data={[cell]} row={10} column={10} />
      </div>
      <canvas ref={chartRef} id="plantingChart" />
    </div>
  );
};

export default App;
