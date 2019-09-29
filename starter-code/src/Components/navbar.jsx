import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link style={{
                    marginRight: "10px"
                }} to="/allbeers">All Beers</Link>
                <Link
                    style={{
                        marginRight: "10px"
                    }}
                    to="/random">Random Beer</Link>
                <Link
                    style={{
                        marginLeft: "2px"
                    }}
                    to="/new">New Beer</Link>
            </nav>
        </div>
    );
}

export default NavBar;