import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
} from "victory";

const BarChartAssignments = (props) => {
  return (
    <div className="div-bar-chart">
      <VictoryChart domainPadding={20} className="graph">
        <VictoryLegend
          gutter={35}
          x={45}
          y={0}
          style={{ title: { fontSize: 10 }, label: { fontSize: 15 } }}
          labels={10}
          data={[
            {
              name: "Score difficulty",
              size: 10,
              symbol: { fill: "#EA989A", size: 4, type: "square" },
              labels: { fontSize: 8 },
            },
            {
              name: "Score fun factor",
              symbol: { fill: "#0D9996", size: 4, type: "square" },
              labels: { fontSize: 8 },
            },
          ]}
        />
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
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          tickFormat={props.persons}
          style={{
            tickLabels: {
              fontSize: 8,
              padding: 15,
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
              fontSize: 8,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChartAssignments;
