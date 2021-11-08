import React from "react";
import navImg from '../assets/nav.png'
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
          <Link exact to='/'>
            <img src={navImg} alt="back to home" />
          </Link>
        );
    }
}

export default Nav