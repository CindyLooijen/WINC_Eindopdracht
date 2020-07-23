import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../../data/data";

import Home from "../Home/Home";
//import Aranka from "../Aranka/Aranka";
import Studentpage from "../Studentpage/StudentPages";

const App = () => {
  const [state, setState] = useState(data);

  const numberedStateData = state.map((object) => ({
    name: object.name,
    assignment: object.assignment,
    scoreDifficulty: parseInt(object.scoreDifficulty),
    scoreFunFactor: parseInt(object.scoreFunFactor),
  }));

  const getDataOfRightStudent = (student) => {
    return numberedStateData.filter((item) => item.name === student);
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

  const getAverageScoreDifficulty = (assignment) => {
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
  );

  return (
    <Router>
      <div>
        <nav className="home">
          <ul>
            <li>
              <Link className="home-link" to="/">
                HOME
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="studentlist">
          <ul>{linkItemsNav}</ul>
        </nav>
        <main>
          <Switch>
            {routeItemsNav}
            <Route path="/">
              <Home
                scoreDifficulty={dataWithAverageScoreDifficulty}
                scoreFunFactor={dataWithAverageScoreFunFactor}
                assignments={allUniqueAssignments}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
