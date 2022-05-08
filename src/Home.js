import { Link } from "react-router-dom";

export default function Home() {

    return         <ul>
    <li className="link3">
    <Link to="/all">All Beers </Link>
    </li>
    <li className="link3">
      <Link to="/random"> Random Beer </Link>
    </li>
    <li className="link3">
      <Link to="/about"> About </Link>
    </li>
  </ul>
    
};
