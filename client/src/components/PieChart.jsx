import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import '../components/RecentOrders.css'

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My first dataset",
      backgroundColor: "rgb(255,99,132)",
      borderColor: "rgb(255,99,132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

export default function PieChart() {
  return (
    <div className="pie border border-secondary p-3">
      <Line data={data}></Line>
    </div>
  );
}
