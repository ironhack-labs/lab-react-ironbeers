import React, { Component} from 'react';
import {Link} from "react-router-dom";

//IT.2 (easy way)
class Nav extends Component {
    render() {
        return(
            <div>
            <Link to="/">
            <img class='home-icon'src="/images/download.png"/>
            </Link>
            </div>
        )
    }
}

export default Nav;