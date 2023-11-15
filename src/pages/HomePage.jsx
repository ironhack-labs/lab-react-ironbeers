import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <Link to={"/beers"}>
        <li>All Beers</li>
      </Link>
      <Link  to={"/random-beer"}>


        <li>Random Beer</li>
      </Link>
      <Link to={"/new-beer"}>
        <li>New Beer</li>
      </Link>
    </div>
  );
}

export default HomePage;
