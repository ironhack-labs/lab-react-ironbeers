import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link to='/'></Link>
            </Container>
        </Navbar>
    )
}

export default Navigation