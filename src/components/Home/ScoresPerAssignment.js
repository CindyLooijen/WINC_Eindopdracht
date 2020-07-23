import React from "react";
import BarChartAssignments from "../Home/BarChartAssignments";

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
        <h1>Hierop komen de scores per assignment</h1>
      </div>
      <div className="bar-chart">
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
