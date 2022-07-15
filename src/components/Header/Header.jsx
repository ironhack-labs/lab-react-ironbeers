import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import photo from '../../assets/home.png'
const Header =() => {

    return (
        <header >
            <Link to="/">
                <Nav.Link as="span"><img src={photo} alt="home" /> </Nav.Link>
            </Link>
        </header>
    )
    
}

export default Header