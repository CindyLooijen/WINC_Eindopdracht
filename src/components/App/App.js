import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../../data/data";

import Home from "../Home/Home";
//import Aranka from "../Aranka/Aranka";
import Studentpagina from "../Studentpagina/Studentpagina";

const App = () => {
  const [state, setState] = useState(data);

  const getDataOfRightStudent = (student) => {
    return state.filter((item) => item.name === student);
  };

  const allPersons = state.map((data) => data.name);
  const allUniquePersons = [...new Set(allPersons)];
  const linkItemsNav = allUniquePersons.map((person) => (
    <li key={person}>
      <Link to={`/${person}`}>{person}</Link>
    </li>
  ));

  const routeItemsNav = allUniquePersons.map((person) => (
    <Route path={`/${person}`} key={person}>
      <Studentpagina
        person={person}
        getDataOfRightStudent={getDataOfRightStudent}
      />
    </Route>
  ));

  const getStateDataWithNumbers = state.map((object) => ({
    name: object.name,
    assignment: object.assignment,
    scoreDifficulty: parseInt(object.scoreDifficulty),
    scoreFunFactor: parseInt(object.scoreFunFactor),
  }));

  console.log(getStateDataWithNumbers);

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
              <Home state={state} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
