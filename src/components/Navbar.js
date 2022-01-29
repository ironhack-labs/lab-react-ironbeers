import {Fragment, React} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="container-nav">
        <Link 
          className="" 
          to="/" // go home
        >⌂
        </Link>
      </nav>
    </Fragment>
  )
}

export default Navbar;
