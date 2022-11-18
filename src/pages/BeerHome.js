import { Link } from "react-router-dom";

function BeerHome() {
    return (
        <div>
            <Link to={`/allbeers`}>Beers List</Link>
            <Link to={`/randombeer`}>Random Beer</Link>
            <Link to={`/newbeer`}>Create Beer</Link>

        </div>
    )
}
export default BeerHome