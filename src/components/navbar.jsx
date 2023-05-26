import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className={"App-header"}>    
        <NavLink to="/" className='w-link homebttn'>Home</NavLink>
    </nav>
  );
}
export default Navbar;