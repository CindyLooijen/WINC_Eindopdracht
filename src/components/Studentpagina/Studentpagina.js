import React from "react";

const Studentpagina = (props) => {
  return (
    <div>
      <h1> Dit is de studentpagina van: {props.person}</h1>
      <div>
        {props
          .getDataOfRightStudent(props.person)
          .map((item) => item.scoreDifficulty)}
      </div>
    </div>
  );
};

export default Studentpagina;
