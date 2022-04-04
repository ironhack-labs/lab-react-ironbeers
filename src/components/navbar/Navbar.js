import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        //BUSCAR NAVBAR EN LIBRERÍA Y AÑADIR:
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allBeers">All Beers</Link>
            </li>
            <li>
              <Link to="/random">Random Beer</Link>
            </li>
          </ul>
        </div>
    );
}

export default Navbar;