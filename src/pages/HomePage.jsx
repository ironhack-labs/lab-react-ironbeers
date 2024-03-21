import {Link} from "react-router-dom";
import beers from "./../assets/beers.png"
import randomBeer from "./../assets/random-beer.png"
import New Beer from './../assets/new-beer.png'

function HomePage() {
    return(
        <div className="HomePage">
        <h1>Homepage</h1>
        <ul>
            <li><Link to={'/beers'}> All Beers</Link></li>
            <li><Link to={'/random-beer'}> Random Beer</Link></li>
            <li><Link to={'/new-beer'}> New Beer</Link></li>
        </ul>
    </div>
    )
}

export default HomePage;
