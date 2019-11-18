import React from "react";

import { Link } from "react-router-dom";

import "./HomeSections.css";

export default function HomeSections(props) {
  return (
    <div className="container">
      <img src={`/images/${props.src}`} />
      <div className="home-textarea">
        <Link to={`/beers`}>
          <h2>{props.title}</h2>
        </Link>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
