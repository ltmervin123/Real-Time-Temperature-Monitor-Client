import "./App.css";
import { Table } from "./components/Table";
import { Chart } from "./components/Chart";
import { Widget } from "./components/Widget";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="h-auto bg-gray-100 pr-20 pl-20 pb-5">
      <div>
        <Header />
        <Widget />
        <Chart />
        <Table />
      </div>
    </div>
  );
}

export default App;
