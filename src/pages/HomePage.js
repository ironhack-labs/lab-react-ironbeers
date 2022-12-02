import { Link } from "react-router-dom";

function HomePage () {
    return (
    <>
        <ul>
        <li>
        <Link to="/Beers" className="linkHome">All beers</Link>
        </li>
        <li>
        <Link to="/RandomBeer" className="linkHome"> Random beer</Link>
        </li>
        <li>
        <Link to="/NewBeer" className="linkHome">New beer </Link>
        </li>
        </ul>
    </>
    )
}

export default HomePage;