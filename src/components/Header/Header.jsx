import './Header.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TiHome } from 'react-icons/ti'



function Header(){
    return(
        <Container className="header-container">
            <Link to="/">
                <TiHome className="ti-home" />
            </Link>
        </Container>
    )
}

export default Header