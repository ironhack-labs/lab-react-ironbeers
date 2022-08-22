import {Link} from 'react-router-dom';


function Navbar() {

  return (
    
    <nav className='navbar'>
        <Link to='/'>
        <img  className='home-navbar' src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' />
        </Link>
    </nav>
  )
}

export default Navbar;