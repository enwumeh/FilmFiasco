import React from "react";
import { Link } from "react-router-dom";

const MovieBoard = (props) => {
  const { specs, keyID } = props;
  // links a  path of for each movie based on its id
  const linkToMovie = `/${specs.id}`;
  

  return (
    <div className="container" key={keyID}>
      <Link to={linkToMovie}>
        <div className="board"></div>
      </Link>
    </div>
  );
};

export default MovieBoard;
