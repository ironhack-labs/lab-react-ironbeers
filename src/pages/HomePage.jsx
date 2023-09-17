import { Link } from "react-router-dom"
function HomePage() {
    return (
        <div>
            <div>
                <Link to="/beers">
                    <h3>All Beers</h3>
                    <img src="src/assets/beers.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/random-beer">
                    <h3>Random Beer</h3>
                    <img src="src/assets/random-beer.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/new-beer">
                    <h3>New Beer</h3>
                    <img src="src/assets/new-beer.png" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default HomePage;
