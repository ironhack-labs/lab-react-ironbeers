import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ link, img, header, text }) => {
  return (
    <div>
      <Link to={link}>
        <img src={img} />
      </Link>
      <Link to={link}>
        <h2>{header}</h2>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default HomeCard;
