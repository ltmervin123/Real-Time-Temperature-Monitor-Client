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

export const Header = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-dark">Temperature Dashboard</h1>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded text-sm">
            Day
          </button>
          <button className="px-3 py-2 bg-primary text-white border border-primary rounded text-sm">
            Week
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded text-sm">
            Month
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded text-sm">
            Year
          </button>
        </div>
      </div>
    </>
  );
};
