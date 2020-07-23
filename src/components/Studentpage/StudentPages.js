import React from "react";
import BarChart from "../BarChart";

const Studentpage = (props) => {
  return (
    <div className="main">
      <div className="description">
        <h1> Dit is de studentpagina van: {props.person}</h1>
      </div>
      <div className="bar-chart">
        <BarChart
          data={props.getDataOfRightStudent(props.person)}
          assignments={props.assignments}
        />
      </div>
      <div className="banner-right">
        <h1>Hier komt het studentprofiel</h1>
      </div>
    </div>
  );
};

export default Studentpage;
