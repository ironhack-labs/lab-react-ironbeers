import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )

}
export default NavBar