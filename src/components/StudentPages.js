import React from "react";
import BarChart from "./BarChart";

const Studentpage = (props) => {
  const profiles = props.studentProfiles;
  const rightProfile = profiles.filter(
    (profile) => profile.key === props.person
  );

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
        />
      </div>
      <div className="banner-right">{rightProfile}</div>
    </div>
  );
};

export default Studentpage;
