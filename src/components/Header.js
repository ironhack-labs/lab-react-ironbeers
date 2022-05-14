import { NavLink } from "react-router-dom";


function Header () {

  return (
    <NavLink to="/">
      <div className='header'>
<h1>Home</h1>
      </div>
      </NavLink> 
  )
}

export default Header; 