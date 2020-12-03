import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="navbar navbar-dark bg-primary mb-3">
            <Container className="text-center">
                <NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home</NavLink>
            </Container>
        </div>
    )
}

export default Header