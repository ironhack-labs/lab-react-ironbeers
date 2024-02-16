import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="container">
      <div>
        <img src={beersImage} alt="Beers" />
        <Link to={"/beers"}>
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed
          elementum leo. Pellentesque eget neque varius, lacinia augue ac,
          fermentum libero.
        </p>
      </div>
      <div>
        <img src={randomBeer} alt="RandomBeer" />
        <Link to={"random-beer"}>
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed
          elementum leo. Pellentesque eget neque varius, lacinia augue ac,
          fermentum libero.
        </p>
      </div>
      <div>
        <img src={newBeer} alt="NewBeer" />
        <Link to={"/new-beer"}>
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed
          elementum leo. Pellentesque eget neque varius, lacinia augue ac,
          fermentum libero.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
