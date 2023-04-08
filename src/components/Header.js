import header from "../assets/header.png";
import home from "../assets/home.png";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    return (

      <header onClick={()=>{navigate("/")}}>
        <img src={home} alt="header" />
      </header>
    //     <div id="navContainer" className="container" onClick={()=>{navigate("/");}}>
    //   <nav className="navbar navbar-light bg-light">
    //     
    //   </nav>
    // </div>
    )
}

export default Header