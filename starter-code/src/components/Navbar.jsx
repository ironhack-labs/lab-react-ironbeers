import React from 'react';
import { Link } from 'react-router-dom';
import {getUser} from "../services/auth";

export default function Navbar () {
        let user = getUser()
        console.log("USER>>>", user)
    return (
        <Link to={"/"}>
            <nav className="columns navbar is-info" role="navigation" aria-label="main navigation">
               <i className="fas fa-home icon is-large has-padding-top-15 has-padding-left-20"></i>
                <div id="navbarBasicExample" className="coulmn navbar-menu is-vcentered has-padding-top-10 has-padding-right-20 has-text-weight-bold">
                            {user ?
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <p>welcome {user.username}</p>
                                    </div>
                                    <Link className="navbar-item" to="/auth/logout">
                                        logout
                                    </Link>
                                    <Link className="navbar-item" to="/user/profile">
                                        profile
                                    </Link>
                                </div>
                                :
                                <div class="navbar-end">
                                    <Link className="navbar-item" to="/auth/signup">
                                        Signup
                                    </Link>
                                    <Link className="navbar-item" to="/auth/login">
                                        Login
                                    </Link>
                                </div>
                            }
                </div>
            </nav>
        </Link>
    );
}
