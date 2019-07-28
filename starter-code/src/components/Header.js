import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <Link to="/"><i className="material-icons home-icon">home</i></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;