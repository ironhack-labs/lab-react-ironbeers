import { Link } from "react-router-dom";
import AddBeerPage from "./AddBeerPage";
import AllBeersPage from "./AllBeersPage";
import RandomBeersPage from "./RandomBeerPage";

function HomePage() {
    return (
        <div>
            <h1>Welcome to the IronBeers App!</h1>
            <Link to="/beers">All Beers</Link>
            <RandomBeersPage />
            <AddBeerPage />
        </div>
    )
}

export default HomePage;
