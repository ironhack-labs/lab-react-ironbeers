import { Link } from "react-router-dom";
import navBarre from "../assets/nav.png";

function NewBeer() {
  return (
    <div className="newbeer">
      <Link to="/">
        <img src={navBarre} alt="navBarre" />
      </Link>
      <h1>New-Beer</h1>
    </div>
  );
}

export default NewBeer;
