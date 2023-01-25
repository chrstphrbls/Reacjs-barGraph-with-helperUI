import "./styles.css";
import * as data from "./components/BarChart/Data";
import BarChartContainer from "./components/UIHelper/BarChartContainer";
import { useState } from "react";

export default function App() {
  const [Data] = useState(data.data);
  const [Label] = useState(data.label);
  return (
    <div className="App">
      <BarChartContainer data={Data} label={Label} />
    </div>
  );
}
