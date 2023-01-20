import { Navbar, Container } from "react-bootstrap";


export function Header() {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619032.png"
              width="50"
              height="50"
              className="d-flex -block align-top"
              alt="Ironbeers"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
} 