import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <Link to={"/beers"}>Beers</Link>
            <Link to={"/random-beer"}>Random Beer</Link>
            <Link to={"/new-beer"}>New Beer</Link>
        </div>
    )
}

export default Homepage;