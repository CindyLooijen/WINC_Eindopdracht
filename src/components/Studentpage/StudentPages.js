import React from "react";
import BarChart from "../BarChart";

const Studentpage = (props) => {
  return (
    <div>
      <h1> Dit is de studentpagina van: {props.person}</h1>
      <BarChart
        data={props.getDataOfRightStudent(props.person)}
        assignments={props.assignments}
      />
    </div>
  );
};

export default Studentpage;
