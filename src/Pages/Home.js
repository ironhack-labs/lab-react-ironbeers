import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>HomePage whic displays the beers</p>

      <Link to="/beers">beers</Link>
      <Link to="/random-beers">random-beers</Link>
      <Link to="/new-beers">new-beers</Link>

    </div>
  );
}