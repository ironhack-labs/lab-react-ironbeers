import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';

function Header () {

  return (
    <Link to='/'>
      <div className='header'>
        <FaHome size={42}/>
      </div>
    </Link>
  )
}

export default Header;