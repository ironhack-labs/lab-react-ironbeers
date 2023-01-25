import homeIcon from '../../assets/homeIcon.png'
import { Link } from "react-router-dom";
import './Header.css'
function Header (){
return(

    <header>
    <Link to="/" > <img className="headerImg" src= {homeIcon} alt="haus"/> </Link>
  </header>
)
}
export default Header;