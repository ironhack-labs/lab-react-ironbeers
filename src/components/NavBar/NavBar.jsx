import { Nav, Container, Navbar } from "react-bootstrap"


const NavBar = () => {

    return (

        <Navbar expand="sm" className="NavBar">
            <Container >
                <Navbar.Brand href="#home">IronBeers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/beers">All Beers</Nav.Link>
                        <Nav.Link href="/random-beer">Random Beer</Nav.Link>
                        <Nav.Link href="/new-beer">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBar