import React from "react";
import { Link } from 'react-router-dom';

const view = props => {
  return (
    <div>
      <Link to={props.link}>
        <img src={props.img} alt="" height="150em" width="220em"/>
        <h1>{props.title}</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Link>
    </div>
  );
}

export default view;
