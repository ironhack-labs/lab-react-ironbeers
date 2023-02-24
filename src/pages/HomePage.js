import { NavLink, Link } from "react-router-dom";
import beerImage from "../assets/beers.png"
import newBeerImage from "../assets/new-beer.png"
import randomBeerImage from "../assets/random-beer.png"


function HomePage() {
    return ( 
        <div className="home-beers">
<img src={beerImage} alt="all-beers" />
<div className="home-beers-text">
<Link to="/beers" style={{ textDecoration: 'none' }}><h2>All Beers</h2></Link>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur laboriosam, fuga quisquam praesentium</p>
</div>

<img src={randomBeerImage} alt="random-beer"/>
<div className="home-beers-text">
<Link to="/random-beer" style={{ textDecoration: 'none' }}><h2>Random Beer</h2></Link>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur laboriosam, fuga quisquam praesentium</p>
</div>

<img src={newBeerImage} alt="new-beer"/>
<div className="home-beers-text">
<Link to="/new-beer" style={{ textDecoration: 'none' }}><h2>New Beer</h2></Link>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur laboriosam, fuga quisquam praesentium</p>
</div>

        </div>
        

        
     );
}

export default HomePage;