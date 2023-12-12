import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
    return (
        <div className="links-container">
            <Link className="link" to="/beers">
                <img src={beers} alt="beers photo" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
            </Link>

            <Link className="link" to="/random-beer">
                <img src={randomBeer} alt="beer tap" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
            </Link>
        
            <Link className="link" to="/new-beer">
                <img src={newBeer} alt="beer bottle" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
            </Link>
        </div>
    )
}

export default HomePage;
