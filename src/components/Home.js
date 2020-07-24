import React from "react";
import BarChart from "./BarChart";

const Home = (props) => {
  return (
    <div className="main">
      <div className="description">
        <h1>Student Dashboard Winc Academy</h1>
        <p>
          Hieronder staat een grafiek met de gemiddelde cijfers voor elke
          opdracht. <br /> Zoom in en uit om minder en meer data in beeld te
          krijgen. <br />
          Scrol naar links en rechts om andere data in beeld te krijgen
        </p>
      </div>
      <div className="bar-chart">
        <div>
          <div className="legend">
            <div className="title-home">Average scores for each assignment</div>
            <div className="wrapper-legend">
              <div className="blue"></div>
              <div className="score-difficulty">Score difficulty</div>
            </div>
            <div className="wrapper-legend">
              <div className="pink"></div>
              <div className="score-funfactor">Score funfactor</div>
            </div>
          </div>
          <BarChart
            //scoreDifficulty={props.scoreDifficulty}
            // scoreFunFactor={props.scoreFunFactor}
            data={props.dataAverageScore}
            assignments={props.assignments}
          />
        </div>
      </div>
      <div className="banner-right">
        <h1>Hier komt de rechter banner</h1>
      </div>
    </div>
  );
};

export default Home;
