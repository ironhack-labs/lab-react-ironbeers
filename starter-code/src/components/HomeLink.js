import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const HomeLink = ({ imagePath, title, description, url }) => {
  return (
    <Link to={url}>
      <img src={imagePath} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default HomeLink;
