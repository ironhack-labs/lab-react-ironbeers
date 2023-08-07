import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Ironbeers!</h1>
              <ul>
                <li>
                    <Link to="/beers">All Beers</Link>
                </li>
                <li>
                    <Link to="/random-beer">Random Beer</Link>
                </li>
                <li>
                    <Link to="/new-beer">New Beer</Link>
                </li>
              </ul>
        </div>
    );
};

export default HomePage;