import React from 'react';
import home from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-react-ironbeers/src/images/home.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
          <nav className="NavBar">
            <Link to="/"><img className="homeIcon" src={home} alt="All Beers"/></Link>
         </nav>
        </div>
    )
}
