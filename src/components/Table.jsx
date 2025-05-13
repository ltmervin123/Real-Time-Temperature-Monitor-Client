export const Table = () => {
  // Activity data
  const activities = [
    {
      time: "Today, 3:45 PM",
      temp: "26.5°C",
      status: "warning",
      duration: "Ongoing",
    },
    {
      time: "Today, 2:30 PM",
      temp: "28.7°C",
      status: "alert",
      duration: "45 min",
    },
    {
      time: "Today, 11:20 AM",
      temp: "24.1°C",
      status: "normal",
      duration: "2h 15m",
    },
    {
      time: "Today, 8:15 AM",
      temp: "22.8°C",
      status: "normal",
      duration: "3h 05m",
    },
    {
      time: "Today, 5:23 AM",
      temp: "21.3°C",
      status: "normal",
      duration: "2h 52m",
    },
    {
      time: "Today, 3:45 PM",
      temp: "26.5°C",
      status: "warning",
      duration: "Ongoing",
    },
    {
      time: "Today, 2:30 PM",
      temp: "28.7°C",
      status: "alert",
      duration: "45 min",
    },
    {
      time: "Today, 11:20 AM",
      temp: "24.1°C",
      status: "normal",
      duration: "2h 15m",
    },
    {
      time: "Today, 8:15 AM",
      temp: "22.8°C",
      status: "normal",
      duration: "3h 05m",
    },
    {
      time: "Today, 5:23 AM",
      temp: "21.3°C",
      status: "normal",
      duration: "2h 52m",
    },
  ];
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
                <th className="pb-3 text-gray-500 font-medium text-sm">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
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
                            activity.status === "normal"
                              ? "bg-green-50 text-secondary"
                              : activity.status === "warning"
                              ? "bg-yellow-50 text-warning"
                              : "bg-red-50 text-danger"
                          }`}
                    >
                      {activity.status.charAt(0).toUpperCase() +
                        activity.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500 text-sm">
                    {activity.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
