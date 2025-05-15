import "./App.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Table } from "./components/Table";
import { Chart } from "./components/Chart";
import { Widget } from "./components/Widget";
import { Header } from "./components/Header";

// SOCKET CLIENT SET UP
const socket = io("http://localhost:5000", {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
});

function App() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    socket.on("temperature", (data) => {
      setTemperature(data);
    });

    return () => {
      socket.off("temperature");
    };
  }, []);
  return (
    <div className="h-auto bg-gray-100 pr-20 pl-20 pb-5">
      <div>
        <Header />
        <Widget temperature={temperature} />
        <Chart temperature={temperature} />
        <Table />
      </div>
    </div>
  );
}

export default App;
