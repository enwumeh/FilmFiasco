import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { heading } = props;

  return (
    <div>
      <div className="full-line">
        <li className="banner banner-item">
          <Link to="/">Movies</Link>
        </li>
        <li className="banner banner-item">{heading}</li>
      </div>
    </div>
  );
};

export default Banner;
