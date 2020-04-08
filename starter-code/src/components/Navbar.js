import React from 'react';
import {Link} from "react-router-dom";
import {getUser} from "../utils/auth";
import {logout} from '../utils/auth'

const Navbar = () => {
    let user = getUser()
    function handleLogout () {
        logout(user)
    }
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                            {user ?
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <p>welcome {user.username}</p>
                                    </div>
                                    <Link className="navbar-item" to="/beers" onClick={handleLogout}>
                                        logout
                                    </Link>
                                    <Link className="navbar-item" to="/profile">
                                        profile
                                    </Link>
                                </div>
                                :
                                <div className="navbar-end">
                                    <Link className="navbar-item" to="/auth/signup">
                                        Signup
                                    </Link>
                                    <Link className="navbar-item" to="/auth/login">
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

export default Navbar;