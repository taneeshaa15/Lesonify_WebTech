import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const App = ({scores,numberOfAttempts}) => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        title: {
          text: "Number of Attempts",
        },
        min : 1
      },
      yaxis: {
        title: {
          text: "Score",
        },
        min : 0,
        max : 10
      },
    },
    series: [
      {
        name: "Score vs Attempts",
        data: [],
      },
    ],
  });


  useEffect(() => {
    // Create data points for the chart
    const dataPoints = scores.map((score, index) => ({
      x: numberOfAttempts - (scores.length - index) + 1, // X-coordinate (number of attempts)
      y: score, // Y-coordinate (score)
    }));

    setChartData({
      ...chartData,
      series: [
        {
          name: "Score vs Attempts",
          data: dataPoints,
        },
      ],
    });
  }, []);

  return (
    <div className="">
      <div className="row text-center mx-auto">
        <div style={{ marginTop: 100, marginLeft: "30%" }} className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
