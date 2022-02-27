import { Link } from "react-router-dom";
import { Card, Col, Button } from "antd";
import imgBeers from "../assets/beers.png";
import imgRandomBeer from '../assets/random-beer.png';
import imgNewBeer from '../assets/new-beer.png';

function HomePage() {
  return (
    <Col>
      <Card className="card">
        <Link to="/beers" className="link">
          <img src={imgBeers} alt="all the beers" className="cardImg" />
          <h2>All Beers</h2>
          <p>
            Donec vehicula ex metus, vitae blandit enim luctus vel. Pellentesque
            sit amet pharetra arcu. Donec pulvinar vel sem non iaculis. Morbi
            convallis leo sit amet malesuada gravida.
          </p>
        </Link>
      </Card>

      <Card className="card">
        <Link to="/random-beer" className="link">
          <img src={imgRandomBeer} alt="beer tap" className="cardImg" />
          <h2>Random Beer</h2>
          <p>
            Donec vehicula ex metus, vitae blandit enim luctus vel. Pellentesque
            sit amet pharetra arcu. Donec pulvinar vel sem non iaculis. Morbi
            convallis leo sit amet malesuada gravida.
          </p>
        </Link>
      </Card>

      <Card className="card">
        <Link to="/new-beer" className="link">
          <img src={imgNewBeer} alt="random beer" className="cardImg" />
          <h2>New Beer</h2>
          <p>
            Donec vehicula ex metus, vitae blandit enim luctus vel. Pellentesque
            sit amet pharetra arcu. Donec pulvinar vel sem non iaculis. Morbi
            convallis leo sit amet malesuada gravida.
          </p>
        </Link>
      </Card>
    </Col>
  );
}

export default HomePage;
