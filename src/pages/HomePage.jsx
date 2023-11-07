import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="centered-content">
            <div>
                <Link to="/beers">
                    <img src="src/assets/beers.png" alt="All Beers" />
                    <h2>All Beers</h2>
                </Link>
            </div>
            <div>
                <Link to="/random-beer">
                    <img src="src/assets/random-beer.png" alt="Random Beer" />
                    <h2>Random Beer</h2>
                </Link>
            </div>
            <div>
                <Link to="/new-beer">
                    <img src="src/assets/new-beer.png" alt="New Beer" />
                    <h2>New Beer</h2>
                </Link>
            </div>
        </div>
    );
}
