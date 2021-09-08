import { NavLink } from "react-router-dom";
import React from "react"



export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Navbar__content">
                
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className="Navbar__content__link"
                            activeClassName="Navbar__content__link--active"
                            exact
                        >
                           <span  role="img" aria-label="house" className="Navbar__content__link__name"> 🏠 Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/beers"
                            className="Navbar__content__link"
                            activeClassName="Navbar__content__link--active"
                        >
                             <span  role="img" aria-label="person" className="Navbar__content__link__name">👩 About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/random-beer"
                            className="Navbar__content__link"
                            activeClassName="Navbar__content__link--active"
                            exact
                        >
                             <span role="img" aria-label="tools" className="Navbar__content__link__name">🛠️ Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/new-beer"
                            className="Navbar__content__link"
                            activeClassName="Navbar__content__link--active"
                        >
                            <span  role="img" aria-label="letter" className="Navbar__content__link__name">✉️  Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}