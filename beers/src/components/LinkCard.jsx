import React from "react";
import { Link } from "react-router-dom";
import { Div } from "../lib/styledcomps";

export const LinkCard = ({ children, img, link }) => {
  return (
    <Div>
      <Link to={`/${link}`}>
        <div>
          <img src={img} alt={children} />
          <p>{children}</p>
        </div>
      </Link>
    </Div>
  );
};
