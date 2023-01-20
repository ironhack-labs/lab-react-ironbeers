import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        <Link to="/beers">
          <img src={beersImg} alt="all beers"></img>
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            hendrerit justo eget sem facilisis placerat. Ut facilisis fermentum
            justo in auctor. Aliquam tristique neque eu venenatis viverra.
            Curabitur in consequat augue, aliquam porttitor mi. Mauris sit amet
            posuere orci. Praesent sed cursus nulla. Nulla facilisi. Suspendisse
            vel pretium ante, at faucibus lacus. Sed gravida enim at nibh
            pulvinar vestibulum.
          </p>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <img src={randomBeerImg} alt="random beer"></img>
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            hendrerit justo eget sem facilisis placerat. Ut facilisis fermentum
            justo in auctor. Aliquam tristique neque eu venenatis viverra.
            Curabitur in consequat augue, aliquam porttitor mi. Mauris sit amet
            posuere orci. Praesent sed cursus nulla. Nulla facilisi. Suspendisse
            vel pretium ante, at faucibus lacus. Sed gravida enim at nibh
            pulvinar vestibulum.
          </p>
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <img src={newBeerImg} alt="new beer"></img>
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            hendrerit justo eget sem facilisis placerat. Ut facilisis fermentum
            justo in auctor. Aliquam tristique neque eu venenatis viverra.
            Curabitur in consequat augue, aliquam porttitor mi. Mauris sit amet
            posuere orci. Praesent sed cursus nulla. Nulla facilisi. Suspendisse
            vel pretium ante, at faucibus lacus. Sed gravida enim at nibh
            pulvinar vestibulum.
          </p>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
