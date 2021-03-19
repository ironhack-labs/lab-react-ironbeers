import React from "react";
import {  Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavLink = (props) => {
  let HomeLink;
console.log(props);
// HomeLink = <Link to='/'>Home</Link>;
  if (props.location.pathname !== "/") {
    HomeLink = <Link to='/'>Home</Link>;
  }


    return (
      <div>
        <header>
          {HomeLink}
        </header>
      </div>
    )
  
}
export default  withRouter(NavLink) ;