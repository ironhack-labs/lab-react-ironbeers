import home from "./assets/home.png"
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className="navbar" style={{ backgroundColor: "#3dc4fc" }}>
      <div className="container justify-content-center">
        <Link className="navbar-brand" to="/"><img src={home} alt="home" width="42" height="42" /></Link>
      </div>
    </div>
  )
}

export default Header;
