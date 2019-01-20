import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Link to={`/`}>
      <img
        src={
          "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
        }
      />
    </Link>
  );
};
