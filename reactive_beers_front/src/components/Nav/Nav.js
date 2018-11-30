import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {Link} from 'react-router-dom';

library.add(faHome)

const Nav = () => (
  <nav className="navbar navbar-dark bg-primary">
    <Link className="home" to={`/`}><span className="navbar-brand mb-0 h1"><FontAwesomeIcon icon={faHome} size="lg" style={{color: "white"}}/></span></Link>
  </nav>
);

export default Nav;
