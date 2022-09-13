import { Link } from "react-router-dom";
import navBarre from "../assets/nav.png";

function Beers() {
  return (
    <div className="beers">
      <Link to="/">
        <img src={navBarre} alt="navBarre" />
      </Link>
      <h1>Beers</h1>
    </div>
  );
}

export default Beers;
