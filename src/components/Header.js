import {  Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

function Header() {
    
    return (
      <nav className="header-container">
        <Link to="/">

           <div className="home-icon">
            <AiOutlineHome style={{fontSize:'25px'}} />
            </div>
            
            </Link>
      </nav>
    );
  }

  export default Header;