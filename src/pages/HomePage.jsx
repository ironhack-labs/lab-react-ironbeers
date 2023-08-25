import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <Link to={"/beers"}>List of Beers</Link>
            <Link to={"/random-beer"}>Random Beers</Link>
            <Link to={"/new-beer"}>Add a New Beer</Link>
        </div>
    );
}

export default HomePage;
