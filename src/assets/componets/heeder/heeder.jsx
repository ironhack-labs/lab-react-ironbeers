import { Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'


const Heeder =()=>{
return (
    <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Home Of Beers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Link className="btn btn-Dark" to='/'>Home</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
)
}
export default Heeder