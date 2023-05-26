import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav className={"Navbar "}>    
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/beers"> Beers </NavLink>
        <NavLink to="/randombeer"> Random Beer </NavLink>  
        <NavLink to="/newbeer"> New Beer </NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;