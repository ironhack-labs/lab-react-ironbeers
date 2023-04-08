import header from "../assets/header.png";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    return (
        <div className="container" onClick={()=>{navigate("/");}}>
      <nav class="navbar navbar-light bg-light">
        {/* <img src={header} alt="header" /> */}
      </nav>
    </div>
    )
}

export default Header