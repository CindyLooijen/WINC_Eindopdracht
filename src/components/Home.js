import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Home = (props) => {
  const labelStyleDifficult = props.checkedDifficult
    ? { color: "red" }
    : { color: "green" };
  const labelStyleFunFactor = props.checkedFunFactor
    ? { color: "red" }
    : { color: "green" };

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
      <div className="bar-chart-home">
        <div className="legend">
          <div className="title-home">
            Average scores for each assignment - bar chart
          </div>
          <div className="wrapper-legend">
            <div className="pink"></div>
            <div className="score-difficulty">Score difficulty</div>
          </div>
          <div className="wrapper-legend">
            <div className="blue"></div>
            <div className="score-funfactor">Score funfactor</div>
          </div>
        </div>
        <BarChart
          data={props.dataAverageScore}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
        <div className="line-chart">
          <div className="legend">
            <div className="title-home">
              Average scores for each assignment - line chart
            </div>
            <div className="wrapper-legend">
              <div className="pink"></div>
              <div className="score-difficulty">Score difficulty</div>
            </div>
            <div className="wrapper-legend">
              <div className="blue"></div>
              <div className="score-funfactor">Score funfactor</div>
            </div>
          </div>
          <LineChart
            data={props.dataAverageScore}
            assignments={props.assignments}
          />
        </div>
      </div>
      <div className="banner-right">
        <div className="filter-homepage">
          <p className="expl">
            Klik op de text om het filter in/uit te schakelen
          </p>
          <div className="filters">
            <label class="first-label" style={labelStyleDifficult}>
              <input
                type="checkbox"
                className="checkbox"
                checked={props.checkedDifficult}
                onChange={(event) =>
                  props.setStateDifficult(event.target.checked)
                }
              ></input>
              {props.checkedDifficult
                ? "Exclude scores difficulty"
                : "Include scores diffculty"}
            </label>
            <label style={labelStyleFunFactor}>
              <input
                type="checkbox"
                className="checkbox"
                checked={props.checkedFunFactor}
                onChange={(event) =>
                  props.setStateFunFactor(event.target.checked)
                }
              ></input>
              {props.checkedFunFactor
                ? "Exclude scores funfactor"
                : "Include scores funfactor"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
