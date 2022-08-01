import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className='navbar'>
          <NavLink to='/'>
            <i className='fa fa-home fa-4x' />
          </NavLink>
        </nav>
    );
}

export default Header;