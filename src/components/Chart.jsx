import { useState, useMemo, useEffect, useCallback } from "react";
import { Line, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);
export const Chart = ({ temperature }) => {
  const [temperatureData, setTemperatureData] = useState({
    data: [],
    timeStamp: [],
  });

  useEffect(() => {
    setTemperatureData((prevData) => {
      return {
        ...prevData,
        data: [...prevData.data, Number(temperature)],
        timeStamp: [...prevData.timeStamp, getHours()],
      };
    });
  }, [temperature]);

  const tempChartData = useMemo(() => {
    return {
      labels: temperatureData.timeStamp,
      datasets: [
        {
          label: "Temperature (°C)",
          data: temperatureData.data,
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          borderColor: "rgba(52, 152, 219, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(52, 152, 219, 1)",
          pointRadius: 4,
          tension: 0.4,
          fill: true,
        },
      ],
    };
  }, [temperature]);

  const tempChartOptions = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 1,
          max: 50,
          position: "left",
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    };
  }, []);

  const distChartData = useMemo(() => {
    return {
      labels: ["Normal (20-25°C)", "Warning (25-28°C)", "Alert (>28°C)"],
      datasets: [
        {
          data: [33, 33, 33],
          backgroundColor: [
            "rgba(46, 204, 113, 0.7)",
            "rgba(243, 156, 18, 0.7)",
            "rgba(231, 76, 60, 0.7)",
          ],
          borderColor: [
            "rgba(46, 204, 113, 1)",
            "rgba(243, 156, 18, 1)",
            "rgba(231, 76, 60, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }, []);

  const distChartOptions = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12,
            padding: 15,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  }, []);

  const getHours = useCallback(() => {
    const date = new Date();
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }, []);

  return (
    <>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="bg-white p-5 rounded-lg shadow-custom lg:col-span-2">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-dark">
              Temperature Trends
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] h-64">
              {" "}
              <Line data={tempChartData} options={tempChartOptions} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-dark">Legend</h2>
          </div>
          <div className="h-64">
            <Doughnut data={distChartData} options={distChartOptions} />
          </div>
        </div>
      </div>
    </>
  );
};
