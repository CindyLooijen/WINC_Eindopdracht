import React from "react";
import BarChartAssignments from "./BarChartAssignments";

const ScoresPerAssignment = (props) => {
  const radioButtonsToSort = props.assignments.map((assignment, index) => (
    <div key={index}>
      <label>
        <input
          type="radio"
          name="sort-assignments"
          value={assignment}
          onChange={(event) => props.filterAssignments(event.target.value)}
        ></input>{" "}
        {assignment}
      </label>
    </div>
  ));

  return (
    <div className="main">
      <div className="description">
        <h1>Scores per assignment</h1>
        <p>
          Kies in de lijst rechts een opdracht. <br /> De grafiek hieronder laat
          de data van die opdracht zien
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
        <BarChartAssignments
          data={props.dataRightAssignment}
          persons={props.persons}
        />
      </div>
      <div className="banner-right" id="radio-buttons">
        {radioButtonsToSort}
      </div>
    </div>
  );
};

export default ScoresPerAssignment;
