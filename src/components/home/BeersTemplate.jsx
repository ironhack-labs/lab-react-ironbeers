import React from "react";
import { Link } from "react-router-dom";

const BeersTemplate = ({ img, title, text, link }) => {
  return (
    <Link to={link}>
      <div>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default BeersTemplate;
