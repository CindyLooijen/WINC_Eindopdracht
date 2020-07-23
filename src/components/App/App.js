import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../../data/data";

import Home from "../Home/Home";
import Studentpage from "../Studentpage/StudentPages";
import ScoresPerAssignment from "../Home/ScoresPerAssignment";

const App = () => {
  const [state, setState] = useState(data);
  const [rightAssignment, setStateRightAssignment] = useState([]);

  const numberedStateData = state.map((object) => ({
    name: object.name,
    assignment: object.assignment,
    scoreDifficulty: parseInt(object.scoreDifficulty),
    scoreFunFactor: parseInt(object.scoreFunFactor),
  }));

  const getDataOfRightStudent = (student) => {
    return numberedStateData.filter((item) => item.name === student);
  };

  const getDataOfRightAssignment = (assignment) => {
    const rightAssignment = numberedStateData.filter(
      (item) => item.assignment === assignment
    );
    setStateRightAssignment(rightAssignment);
    console.log(rightAssignment);
    return rightAssignment;
  };

  const allPersons = state.map((data) => data.name);
  const allUniquePersons = [...new Set(allPersons)];
  const allAssignments = state.map((data) => data.assignment);
  const allUniqueAssignments = [...new Set(allAssignments)];

  const linkItemsNav = allUniquePersons.map((person) => (
    <li key={person}>
      <Link to={`/${person}`}>{person}</Link>
    </li>
  ));

  const routeItemsNav = allUniquePersons.map((person) => (
    <Route path={`/${person}`} key={person}>
      <Studentpage
        person={person}
        getDataOfRightStudent={getDataOfRightStudent}
        assignments={allUniqueAssignments}
      />
    </Route>
  ));

  const getAverageScores = (assignment, typeOfScore) => {
    const filteredData = numberedStateData
      .filter((item) => item.assignment === assignment)
      .map((score) => score[typeOfScore]);
    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;
    return averageScore;
  };

  const dataWithAverageScores = allUniqueAssignments.map((assignment) => ({
    assignment: assignment,
    scoreDifficulty: getAverageScores(assignment, "scoreDifficulty"),
    scoreFunFactor: getAverageScores(assignment, "scoreFunFactor"),
  }));

  /* const getAverageScoreDifficulty = (assignment) => {
    const filteredData = numberedStateData
      .filter((item) => item.assignment === assignment)
      .map((score) => score.scoreDifficulty);

    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;

    return averageScore;
  };

  const getAverageScoreFunFactor = (assignment) => {
    const filteredData = numberedStateData
      .filter((item) => item.assignment === assignment)
      .map((score) => score.scoreFunFactor);

    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;

    return averageScore;
  };

  const dataWithAverageScoreDifficulty = allUniqueAssignments.map(
    (assignment) => ({
      assignment: assignment,
      scoreDifficulty: getAverageScoreDifficulty(assignment),
    })
  );

  const dataWithAverageScoreFunFactor = allUniqueAssignments.map(
    (assignment) => ({
      assignment: assignment,
      scoreFunFactor: getAverageScoreFunFactor(assignment),
    })
  ); */

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li className="home">
              <Link className="home-link" to="/">
                HOME
              </Link>
            </li>
            {linkItemsNav}
            <li>
              <Link to="/score-per-assignment">Assignments</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            {routeItemsNav}
            <Route path="/score-per-assignment">
              <ScoresPerAssignment
                filterAssignments={getDataOfRightAssignment}
                dataRightAssignment={rightAssignment}
                assignments={allUniqueAssignments}
                persons={allUniquePersons}
              />
            </Route>
            <Route path="/">
              <Home
                //scoreDifficulty={dataWithAverageScoreDifficulty}
                //scoreFunFactor={dataWithAverageScoreFunFactor}
                dataAverageScore={dataWithAverageScores}
                filterAssignments={getDataOfRightAssignment}
                dataRightAssignment={rightAssignment}
                assignments={allUniqueAssignments}
                persons={allUniquePersons}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
