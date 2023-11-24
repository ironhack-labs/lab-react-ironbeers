import { Link } from "react-router-dom"
import beersImage from "../assets/beers.png"
import randomBeerImage from "../assets/random-beer.png"
import newBeerImage from "../assets/new-beer.png"

function HomePage() {
    return (
        <div className="home-page">
            <div className="link-container">
                <Link to="/beers">
                    <div className="link-item">
                        <img src={beersImage} alt="All Beers" />
                        <p>All Beers</p>
                    </div>
                </Link>
                <Link to="/random-beer">
                    <div className="link-item">
                        <img src={randomBeerImage} alt="Random Beer" />
                        <p>Random Beer</p>
                    </div>
                </Link>
                <Link to="/new-beer">
                    <div className="link-item">
                        <img src={newBeerImage} alt="New Beer" />
                        <p>New Beer</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage



