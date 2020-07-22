import React from "react";
import BarChart from "../BarChart";

const Studentpagina = (props) => {
  console.log(props.getDataOfRightStudent(props.person));
  return (
    <div>
      <h1> Dit is de studentpagina van: {props.person}</h1>
      <div>
        <BarChart data={props.getDataOfRightStudent(props.person)} />
      </div>
    </div>
  );
};

export default Studentpagina;
