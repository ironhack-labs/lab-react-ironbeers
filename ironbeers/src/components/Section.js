import React from "react";
import { Link } from "react-router-dom";

export const Section = ({link, title, img}) => {

  return (
    <div key={title}>
      <Link to={`/${link}`}>
        <div>
        <img width="100%" src={img} alt=""/>
        <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Link>
    </div>
  );
};
