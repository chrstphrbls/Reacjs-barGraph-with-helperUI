import React from "react";
import { BarChart } from "react-chartjs-2";
import { useState } from "react";
import { SampleData } from "./ColumnDisplay.data";

const ColumnDisplay = (props) => {
  const chartData = props.chartData;
  const chartOptions = props.chartOptions;

  const [SampleData, set_SampleData] = useState({
    labels: SampleData.map((item) => item.Region),
    datasets: [
      {
        label: "Region counts",
        data: SampleData.map((item) => item.Count)
      }
    ]
  });

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br></br>
      {/* <BarChart data={} /> */}
    </div>
  );
};

export default ColumnDisplay;
