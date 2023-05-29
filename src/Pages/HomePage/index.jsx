import image1 from "../../assets/beers.png";
import image2 from "../../assets/new-beer.png";
import image3 from "../../assets/random-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Ironbeers</h1>
      <div>
        <Link to='/beers'>
            <img src={image1} />
            <h1>All Beers</h1>
        </Link>
      </div>

      <div>
        <Link to='/random-beer'>
            <img src={image3} />
            <h1>Random Beers</h1>
        </Link>
      </div>
      <div>
      <Link to='/new-beer'>
            <img src={image2} />
            <h1>New Beer</h1>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
