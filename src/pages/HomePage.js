import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import imgAllBeers from "../assets/beers.png";
import imgRandomBeers from "../assets/random-beer.png";
import imgNewBeers from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <Card>
        <Link to="/Beers">
          <Card.Img variant="top" src={imgAllBeers} alt="all beers" />
          <Card.Body>
            <Card.Text>
              <h2>All Beer</h2>
              <p>All beers you can find 🍻</p>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
      <Card>
        <Link to="/RandomBeer">
          <Card.Img variant="top" src={imgRandomBeers} alt="random beer" />
          <Card.Body>
            <Card.Text>
              <h2>Random Beer</h2>
              <p>Get a random beer 🍺</p>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
      <Card>
        <Link to="/NewBeer">
          <Card.Img variant="top" src={imgNewBeers} alt="new beer" />
          <Card.Body>
            <Card.Text>
              <h2>New Beer</h2>
              <p>Try something new 🍺</p>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
}

export default HomePage;
