import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryZoomContainer,
  VictoryTooltip,
} from "victory";

const BarChart = (props) => {
  const data = props.data;
  const createDataWithLabels = data.map((item) => ({
    assignment: item.assignment,
    scoreDifficulty: item.scoreDifficulty,
    scoreFunFactor: item.scoreFunFactor,
    label: `Assignment ${item.assignment}, Difficulty: ${item.scoreDifficulty}, FunFactor: ${item.scoreFunFactor}`,
  }));

  return (
    <div className="div-bar-chart">
      <VictoryChart
        domainPadding={10}
        containerComponent={
          <VictoryZoomContainer
            allowZoom={true}
            allowPan={true}
            zoomDimension="x"
            zoomDomain={{ x: [0, 28.5] }}
          />
        }
      >
        <VictoryGroup offset={3}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={createDataWithLabels}
            x="assignment"
            y="scoreDifficulty"
            style={{ data: { fill: "#EA989A" }, labels: { fontSize: 8 } }}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={createDataWithLabels}
            x="assignment"
            y="scoreFunFactor"
            style={{ data: { fill: "#0D9996" }, labels: { fontSize: 8 } }}
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
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
          standalone={false}
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

export default BarChart;
