import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine } from "victory";

const LineChart = (props) => {
  const data = props.data;
  const averageScoreDifficulty = data.map((item) => ({
    assignment: item.assignment,
    score: item.scoreDifficulty,
  }));
  const averageScoreFunFactor = data.map((item) => ({
    assignment: item.assignment,
    score: item.scoreFunFactor,
  }));

  const getDataLineChart = (data) => {
    return data.map((item) => ({
      x: item.assignment,
      y: item.score,
    }));
  };

  return (
    <div className="div-bar-chart">
      <VictoryChart>
        <VictoryLine
          data={getDataLineChart(averageScoreDifficulty)}
          style={{ data: { stroke: "#EA989A" } }}
        />
        <VictoryLine
          data={getDataLineChart(averageScoreFunFactor)}
          style={{ data: { stroke: "#0D9996" } }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignments}
          style={{
            tickLabels: {
              fontSize: 6,
              padding: 15,
              //angle: -90,
              writingMode: "vertical-lr",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 8,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;
