import React from "react";
import BarChart from "../BarChart";

const Home = (props) => {
  return (
    <div className="home-div">
      <h1>Dit is de homepagina</h1>
      <BarChart state={props.state} />
    </div>
  );
};

export default Home;
