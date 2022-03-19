import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 12, 9, 15, 17, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#ffe600",
          "#ffe600",
          "#ffe600",
          "#ffe600",
          "#ffe600",
          "#ffe600",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    legend: {
      labels: {
        fontSize: 0,
      },
    },
  };

  return (
    <div>
      <Line height={100} width={200} data={data} options={options} />
    </div>
  );
};

export default LineChart;
