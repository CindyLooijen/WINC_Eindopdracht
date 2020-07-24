import React from "react";
import BarChart from "./BarChart";

const Studentpage = (props) => {
  const profiles = props.studentProfiles;
  const rightProfile = profiles.filter(
    (profile) => profile.key === props.person
  );

  const labelStyleDifficult = props.checkedDifficult
    ? { color: "red" }
    : { color: "green" };
  const labelStyleFunFactor = props.checkedFunFactor
    ? { color: "red" }
    : { color: "green" };

  return (
    <div className="main">
      <div className="description">
        <h1>{props.person}</h1>
        <p>
          De grafiek hieronder toont de resultaten van de ingevulde evaluaties
          van {props.person} <br />
        </p>
      </div>
      <div className="bar-chart">
        <div className="legend">
          <div className="title-students">Scores for each assignment</div>
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
          data={props.getDataOfRightStudent(props.person)}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
      </div>
      <div className="banner-right">
        {rightProfile}
        <div class="filter-studentpage">
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
                : "Include scores difficulty"}
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

export default Studentpage;
