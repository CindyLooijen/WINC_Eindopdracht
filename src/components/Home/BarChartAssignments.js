import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

const BarChart = (props) => {
  console.log(props);
  return (
    <div className="div-home-page">
      <VictoryChart domainPadding={20}>
        <VictoryGroup offset={10}>
          <VictoryBar
            data={props.data}
            x="name"
            y="scoreDifficulty"
            style={{ data: { fill: "#EA989A" } }}
          />
          <VictoryBar
            data={props.data}
            x="name"
            y="scoreFunFactor"
            style={{ data: { fill: "#0D9996" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
          style={{
            tickLabels: {
              fontSize: 5,
              padding: 10,
              //angle: -90,
              writingMode: "vertical-rl",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 5,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
