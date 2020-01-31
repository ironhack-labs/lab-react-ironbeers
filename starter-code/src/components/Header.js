import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            
            <nav className="navbar navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-end">
                <Link to = "/">                                    
                    <i className=" icon fas fa-home icon is-large has-text-white "></i>                                
                </Link>             
            </div>
            </nav>

        )
    }
}
export default Header;