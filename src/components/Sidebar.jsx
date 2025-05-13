import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faTachometerAlt,
  faChartLine,
  faBell,
  faHistory,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
export const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div className="bg-dark text-white w-56 flex flex-col">
        <div className="flex items-center p-5 border-b border-opacity-10 border-white">
          <FontAwesomeIcon
            icon={faThermometerHalf}
            className="text-primary text-xl mr-3"
          />
          <h3 className="font-semibold">Temp Monitor</h3>
        </div>
        <ul className="mt-5">
          <li className="flex items-center px-5 py-3 bg-white bg-opacity-10 cursor-pointer">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center px-5 py-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <FontAwesomeIcon icon={faChartLine} className="mr-3" />
            <span>Analytics</span>
          </li>
          <li className="flex items-center px-5 py-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <FontAwesomeIcon icon={faBell} className="mr-3" />
            <span>Alerts</span>
          </li>
          <li className="flex items-center px-5 py-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <FontAwesomeIcon icon={faHistory} className="mr-3" />
            <span>History</span>
          </li>
          <li className="flex items-center px-5 py-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <FontAwesomeIcon icon={faCog} className="mr-3" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
};
