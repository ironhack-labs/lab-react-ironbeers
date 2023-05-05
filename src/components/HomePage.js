import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"



function HomePage() {
    return (
        <nav className="navigation">
          <Link className="navigation-link" to="/beers">
            <img src={beers} alt="List of Beers" />
            <h2>All Beers</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          </Link>
          <Link className="navigation-link" to="/random-beer">
          <img src={randomBeer} alt="Ramdom Beer" />
            <h2>Ramdom Beer</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            </Link>
          <Link className="navigation-link" to="/new-beer">
            <img src={newBeer} alt="New Beer" />
            <h2>New Beer</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            </Link>
        </nav>
    )

}

export default HomePage;