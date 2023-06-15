import "./Chart.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { day: "1일", kg: 80 },
  { day: "5일", kg: 79.8 },
  { day: "10일", kg: 79 },
  { day: "15일", kg: 78.8 },
  { day: "20일", kg: 78.5 },
  { day: "25일", kg: 78 },
  { day: "30일", kg: 77.6 },
];

const lineChart = {
  width: "500px",
  height: "300px",
  margin: "5px 30px 5px 5px"
}

export default function Chart() {
  return (
    <div className="chart-container">
      <LineChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[76, 82]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="kg" stroke="rgb(203, 170, 254)" />
      </LineChart>
    </div>
  );
}