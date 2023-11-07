import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav 
        style={{
            backgroundColor:"blue",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            position:"fixed",
            width: "100%",
            }}>

            <Link to="/"> <img src="src/assets/home-icon.png"/></Link>
        </nav>
    )
}

export default Navbar;
