//jshint esversion:9

import {Link} from 'react-router-dom';

export const NavBar = () => {

  return (
    <div className='container-fluid'>

    <nav className='navbar navbar-dark bg-primary row '>

        <div className="container-fluid justify-content-center">

            <div className="row">
                <Link to="/" className="navbar-brand"> <h3>Home</h3> </Link>
            </div> 
        </div>
    </nav>
    </div>
  )
}
