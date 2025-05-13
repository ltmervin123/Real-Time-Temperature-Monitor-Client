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

export const Widget = () => {
  return (
    <>
      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">CURRENT TEMPERATURE</h3>
          <div className="text-warning text-3xl font-semibold mb-1">26.5°C</div>
          <div className="flex items-center justify-center text-danger text-sm">
            <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
            <span>1.2°C from yesterday</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">AVERAGE TODAY</h3>
          <div className="text-dark text-3xl font-semibold mb-1">24.8°C</div>
          <div className="flex items-center justify-center text-danger text-sm">
            <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
            <span>0.5°C from yesterday</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">MIN TEMPERATURE</h3>
          <div className="text-dark text-3xl font-semibold mb-1">21.3°C</div>
          <div className="text-sm">At 5:23 AM</div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">MAX TEMPERATURE</h3>
          <div className="text-warning text-3xl font-semibold mb-1">28.7°C</div>
          <div className="text-sm">At 2:45 PM</div>
        </div>
      </div>
    </>
  );
};
