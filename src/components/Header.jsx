import homeIcon from "../assets/home-icon.png"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" style={{display: 'flex', alignItems:'center', justifyContent: 'center', textAlign: 'center'}}>
      <NavLink to={"/"} style={{textAlign: 'center'}}>
        <img src={homeIcon} alt="home-icon" className="navbar-brand" width={30} style={{marginRight: 0, filter: 'invert(1)'}}/>
      </NavLink>
    </nav>
  )
}

export default Header
