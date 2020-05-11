import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavMain = (props) => {
  return (
    <nav
      className={props.location.pathname === "/" ? "is-hidden" : "headerMain"}
    >
      <NavLink exact to="/">
        HOME
      </NavLink>
    </nav>
  );
};

export default withRouter(NavMain);
