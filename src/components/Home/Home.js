import React from "react";
import BarChart from "../BarChart";

const Home = (props) => {
  return (
    <div className="home-div">
      <h1>Dit is de homepagina</h1>
      <BarChart
        scoreDifficulty={props.scoreDifficulty}
        scoreFunFactor={props.scoreFunFactor}
        assignments={props.assignment}
      />
    </div>
  );
};

export default Home;
