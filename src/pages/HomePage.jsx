import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <Link to={"/beers"}>
                <div>
                    <img src="src/assets/beers.png" alt="" />
                    <h2>All beers</h2>
                </div>
            </Link>
            <Link to={"/random-beer"}>
            <div>
                    <img src="src/assets/random-beer.png" alt="" />
                    <h2>Random beer</h2>
                </div>
            </Link>
            <Link to={"/new-beer"}>
            <div>
                    <img src="src/assets/new-beer.png" alt="" />
                    <h2>New beer</h2>
                </div>
            </Link>
        </div>
    )
}

export default HomePage;
