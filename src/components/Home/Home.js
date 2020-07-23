import React from "react";
import BarChart from "../BarChart";
import BarChartAssignments from "../Home/BarChartAssignments";

const Home = (props) => {
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
    <div className="home-div">
      <h1>Dit is de homepagina</h1>
      <BarChart
        //scoreDifficulty={props.scoreDifficulty}
        // scoreFunFactor={props.scoreFunFactor}
        data={props.dataAverageScore}
        assignments={props.assignments}
      />
      <div>
        {radioButtonsToSort}
        <BarChartAssignments
          data={props.dataRightAssignment}
          persons={props.persons}
        />
      </div>
    </div>
  );
};

export default Home;
