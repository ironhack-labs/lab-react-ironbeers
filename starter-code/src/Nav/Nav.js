import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'


class Nav extends React.Component {

    render() {
        return (
            <div className="Nav">
                 <Link to={"/"}><p>Home</p></Link>
            </div>
        );
    }
}

export default Nav;