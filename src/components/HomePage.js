import { NavLink } from "react-router-dom";
import { Card, Container, Row } from "react-bootstrap";
import allbeers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from '../assets/new-beer.png'
const linkStyle = {
    textDecoration: 'none'
  };
function HomePage() {
  return (
    <> 
    <h1>Iron Beers</h1>
      <Container>
        <Row>
          <NavLink className="nav-home" to="/beers" style={linkStyle}>
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={allbeers} alt="Card image" />
                <Card.Title className="text-left">All Beers</Card.Title>
               
                <Card.Text className="text-left">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut
                   aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        </Row>

<Row>
<NavLink to="/random-beer" style={linkStyle}>
<Card>
              <Card.Body>
              <Card.Img variant="top" src={randombeer} alt="Card image" />
              <Card.Title className="text-left">Random beer</Card.Title>
              <Card.Text className="text-left">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut
                   aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        </Row>
        <Row>
<NavLink to="/random-beer" style={linkStyle}>
<Card>
              <Card.Body>
              <Card.Img variant="top" src={newbeer} alt="Card image" />
              <Card.Title className="text-left">New beer</Card.Title>
              <Card.Text className="text-left">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut
                   aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        </Row>
      </Container>

     
    </>
  );
}

export default HomePage;
