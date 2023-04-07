import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
    return (
        <>
            <div>
                <img src={allBeersImg} alt="all beers" />
                <Link to={"/beers"}><h1>All Beers</h1></Link>
                <p>Some Text for all</p>
            </div>
            <div>
                <img src={randomBeerImg} alt="random beer" />
                <Link to={"/"}><h1>Random Beer</h1></Link>
                <p>Some Text for random</p>
            </div>
            <div>
                <img src={newBeerImg} alt="new beer" />
                <Link to={"/"}><h1>New Beer</h1></Link>
                <p>Some Text for new</p>
            </div>
        </>
    );
}

export default HomePage;