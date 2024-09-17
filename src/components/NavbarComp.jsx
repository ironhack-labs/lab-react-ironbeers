import { Nav, Navbar } from 'react-bootstrap';

export default function NavbarComp() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="d-flex justify-content-center">
        <Nav.Link href="/">
          <img src="/public/home-icon.png" alt="Home Icon" />
        </Nav.Link>
      </Navbar>
    </>
  );
}
