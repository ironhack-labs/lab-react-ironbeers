import { Link } from "react-router-dom";
import navBarre from "../assets/nav.png";

function RandomBeer() {
  return (
    <div>
      <div className="randomBeer">
        <Link to="/">
          <img src={navBarre} alt="navBarre" />
        </Link>
        <h1>Random-Beer</h1>
      </div>
    </div>
  );
}

export default RandomBeer;
