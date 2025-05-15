import { useState, useEffect, useCallback } from "react";

export const Table = ({ temperature }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (temperature === 0) {
      return;
    }

    setActivities((prev) => [
      ...prev,
      {
        time: getDates(),
        status: getStatus(),
        temp: temperature,
      },
    ]);
  }, [temperature]);

  const getDates = useCallback(() => {
    const date = new Date();
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return `Today, ${time}`;
  }, []);

  const getStatus = useCallback(() => {
    if (temperature <= 25) {
      return "Normal";
    } else if (temperature > 25 && temperature <= 28) {
      return "Warning";
    } else {
      return "Alert";
    }
  }, [temperature]);

  return (
    <>
      {/* Activity Table */}
      <div className="bg-white p-5 rounded-lg shadow-custom mb-5 box-content">
        <h2 className="text-lg font-semibold text-dark mb-5">
          Recent Activity
        </h2>
        <div className="overflow-auto  h-60 static">
          <table className="w-full overscroll-contain">
            <thead>
              <tr className="text-left">
                <th className="pb-3 text-gray-500 font-medium text-sm">Time</th>
                <th className="pb-3 text-gray-500 font-medium text-sm">
                  Temperature
                </th>
                <th className="pb-3 text-gray-500 font-medium text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.length > 0 ? (
                activities
                  .slice()
                  .reverse()
                  .map((activity, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="py-3 text-gray-500 text-sm">
                        {activity.time}
                      </td>
                      <td className="py-3 text-gray-500 text-sm">
                        {activity.temp}
                      </td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium
                          ${
                            activity.status === "Normal"
                              ? "bg-green-50 text-secondary"
                              : activity.status === "Warning"
                              ? "bg-yellow-50 text-warning"
                              : "bg-red-50 text-danger"
                          }`}
                        >
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-3 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
