import { useState, useRef, useEffect } from "react";
export const Widget = ({ temperature }) => {
  const [totalTemp, setTotalTemp] = useState([]);
  const [maxTemp, setMaxTemp] = useState(0.0);
  const [minTemp, setMinTemp] = useState(0.0);
  const [aveTemp, setAveTemp] = useState(0.0);

  // SET MAX TEMP
  useEffect(() => {
    if (maxTemp === 0.0) {
      setMaxTemp(temperature);
      return;
    }
    setMaxTemp((prev) => {
      if (temperature > prev) {
        return temperature;
      }
      return prev;
    });
  }, [temperature]);

  // SET MIN TEMP
  useEffect(() => {
    if (minTemp === 0.0) {
      setMinTemp(temperature);
      return;
    }
    setMinTemp((prev) => {
      if (temperature < prev) {
        return temperature;
      }
      return prev;
    });
  }, [temperature]);

  // CALCULATE AVERAGE
  useEffect(() => {
    if (aveTemp === 0.0) {
      setAveTemp(temperature);
      return;
    }
    const total = totalTemp.reduce((acc, num) => acc + num, 0);
    const numberOfTemp = totalTemp.length;
    const average = (total / numberOfTemp).toFixed(1);
    setAveTemp(average);
  }, [temperature]);

  // ADD UP TEMP
  useEffect(() => {
    if (temperature === 0) return;

    setTotalTemp((prev) => [...prev, Number(temperature)]);
  }, [temperature]);

  return (
    <>
      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">CURRENT TEMPERATURE</h3>
          <div className="text-warning text-3xl font-semibold mb-1">{`${temperature}°C`}</div>
          <div className="flex items-center justify-center text-danger text-sm"></div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">AVERAGE TODAY</h3>
          <div className="text-dark text-3xl font-semibold mb-1">{`${aveTemp}°C`}</div>
          <div className="flex items-center justify-center text-danger text-sm"></div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">MIN TEMPERATURE</h3>
          <div className="text-3xl font-semibold mb-1 text-secondary">{`${minTemp}°C`}</div>
          <div className="text-sm">At 5:23 AM</div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-custom text-center">
          <h3 className="text-gray-500 text-sm mb-2">MAX TEMPERATURE</h3>
          <div className="text-3xl font-semibold mb-1 text-danger">{`${maxTemp}°C`}</div>
          <div className="text-sm">At 2:45 PM</div>
        </div>
      </div>
    </>
  );
};
