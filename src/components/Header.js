import headerimage from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div>
      <Link to={`/`}>
        <img src={headerimage} />
      </Link>
    </div>
    );
  };
  
  export default Header;