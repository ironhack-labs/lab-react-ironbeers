import { NavLink } from 'react-router-dom';

function NavBar(){

    return (
    <header className="navbar">
        <div className="container">
          <NavLink to={`/`}className="navbar-brand">Home</NavLink>  
        </div>
      </header> 
    )
}

export default NavBar;
