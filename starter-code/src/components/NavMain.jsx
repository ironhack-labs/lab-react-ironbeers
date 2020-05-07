import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = (props) => {
  return (
    <div>
      <NavLink exact to="/">
        <img className="navImg"
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt=""
        />
      </NavLink>
    </div>
  );
};

export default NavMain;
