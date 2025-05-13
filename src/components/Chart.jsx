import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faTachometerAlt,
  faChartLine,
  faBell,
  faHistory,
  faCog,
  faArrowUp,
  faDownload,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
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
export const Chart = () => {
  const tempChartData = {
    labels: ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22.5, 21.8, 21.3, 23.2, 25.7, 28.7, 26.5, 25.1],
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

  const tempChartOptions = {
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
        min: 20,
        max: 30,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const distChartData = {
    labels: ["Normal (20-25°C)", "Warning (25-28°C)", "Alert (>28°C)"],
    datasets: [
      {
        data: [65, 25, 10],
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

  const distChartOptions = {
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
    },
  };
  return (
    <>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="bg-white p-5 rounded-lg shadow-custom lg:col-span-2">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-dark">
              Temperature Trends
            </h2>
            <div>
              <button className="ml-2 text-gray-500 hover:text-primary">
                <FontAwesomeIcon icon={faDownload} />
              </button>
              <button className="ml-2 text-gray-500 hover:text-primary">
                <FontAwesomeIcon icon={faExpand} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <Line data={tempChartData} options={tempChartOptions} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-dark">Distribution</h2>
            <div>
              <button className="ml-2 text-gray-500 hover:text-primary">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <Doughnut data={distChartData} options={distChartOptions} />
          </div>
        </div>
      </div>
    </>
  );
};
