import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-dark text-center">
                    <div className="col">
                        <Link to='/'><button className="navbar-toggler text-center" type="button">
                            <span className="fas fa-home text-center" />
                        </button></Link>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;
