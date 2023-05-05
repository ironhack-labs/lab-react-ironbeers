import { NavLink } from "react-router-dom"

function Header(){
    return(
       <NavLink to="/">
          <div className="header">Home</div>
       </NavLink>
    )
}

export default Header