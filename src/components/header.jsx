import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter, Switch } from "react-router-dom";

const Header = (props) => {

  return (
    <div>
        <img src="/assets/header-home-beers.png" alt="" />
    </div>
  );
};

export default withRouter(Header);
