import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Table } from "./components/Table";
import { Chart } from "./components/Chart";
import { Widget } from "./components/Widget";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-5">
        <Header />
        <Widget />
        <Chart />
        <Table />
      </div>
    </div>
  );
}

export default App;
