import React from "react";

import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const Doughnet = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(100, 100, 100)",
          "rgb(50, 50, 50)",
          "rgb(150, 150, 150)",
        ],
        hoverOffset: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut radius={50} data={data} />
    </div>
  );
};

export default Doughnet;
