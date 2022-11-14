import { Navbar, Container, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container style={{ justifyContent: "center" }}>
          <LinkContainer to="/">
            <NavLink>
              <h1>
                <i
                  className="bi bi-house-door-fill"
                  style={{ fontSize: 50, color: "white" }}
                ></i>
              </h1>
            </NavLink>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
};
