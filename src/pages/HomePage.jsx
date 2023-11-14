import { Link } from "react-router-dom";
import allBeersImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'


function HomePage() {
    return (
        <main>
            <h1>The IronHack-Beers</h1>
            <div className="cards-wrap">
                <Link to="/beers" className="cards">
                    <img src={allBeersImg} alt="" />
                    <h3>All Beers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quis.</p>
                </Link>
                <Link to="/random-beer" className="cards">
                    <img src={randomBeerImg} alt="" />
                    <h3>Random Beer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fuga.</p>
                </Link>
                <Link to="/new-beer" className="cards">
                    <img src={newBeerImg} alt="" />
                    <h3>New Beer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fuga.</p>
                </Link>
            </div>
        </main>
    )
}

export default HomePage;
