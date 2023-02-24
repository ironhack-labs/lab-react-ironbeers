import {Link} from "react-router-dom"

function Header() {
    return ( 
        <div>
            <header className="Header">
                <Link to="/"><img src={"../assets/header.png"} alt="home"/></Link>
            </header>
        </div>
     );
}

export default Header;