import React from "react";
import BarChart from "../BarChart";

const Home = (props) => {
  return (
    <div className="main">
      <div className="description">
        <h1>Dit is de homepagina</h1>
      </div>
      <div className="bar-chart">
        <BarChart
          //scoreDifficulty={props.scoreDifficulty}
          // scoreFunFactor={props.scoreFunFactor}
          data={props.dataAverageScore}
          assignments={props.assignments}
        />
      </div>
      <div className="banner-right">
        <h1>Hier komt de rechter banner</h1>
      </div>
    </div>
  );
};

export default Home;
