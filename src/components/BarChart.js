import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

const cindyTheme = {
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 10,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
      grid: {
        fill: "none",
        stroke: "none",
      },
      ticks: {
        fill: "transparent",
        size: 10,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 15,
        letterSpacing: "normal",
        padding: 10,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 0,
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },
  chart: {
    width: 1100,
    height: 500,
    padding: 75,
  },
  group: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    width: 250,
    height: 350,
    padding: 50,
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2,
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
};

const BarChart = (props) => {
  return (
    <div className="div-home-page">
      <VictoryChart domainPadding={{ x: 11 }} width={1200} height={500}>
        <VictoryGroup offset={10}>
          <VictoryBar
            data={props.data}
            x="assignment"
            y="scoreDifficulty"
            style={{ data: { fill: "#EA989A" } }}
            barWidth={7}
            alignment="start"
          />
          <VictoryBar
            data={props.data}
            x="assignment"
            y="scoreFunFactor"
            style={{ data: { fill: "#0D9996" } }}
            barWidth={7}
            alignment="start"
          />
        </VictoryGroup>
        <VictoryAxis
          style={{
            axis: { strokeLinecap: "round", strokeLinejoin: "round" },
            tickLabels: {
              fontSize: 13,
              padding: 25,
              angle: -45,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
