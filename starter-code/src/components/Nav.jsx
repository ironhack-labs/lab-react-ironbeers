import React from 'react';
import {Link} from "react-router-dom";
import {getUser} from "../utils/auth";


const Nav = () => {
    let user = getUser()
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                            {user ?
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <p>welcome {user.username}</p>
                                    </div>
                                    <Link className="navbar-item" to="/logout">
                                        logout
                                    </Link>
                                    <Link className="navbar-item" to="/profile">
                                        profile
                                    </Link>
                                </div>
                                :
                                <div className="navbar-end">
                                    <Link className="navbar-item" to="/signup">
                                        Signup
                                    </Link>
                                    <Link className="navbar-item" to="/login">
                                        Login
                                    </Link>
                                    <Link className="navbar-item" to="/">
                                        Home
                                    </Link>
                                </div>
                            }
                </div>
            </nav>
        </div>
    );
}

export default Nav;