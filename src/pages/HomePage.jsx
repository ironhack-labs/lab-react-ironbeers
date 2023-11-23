import { Link } from "react-router-dom"
import beers from "./../assets/beers.png"
import randomBeer from "./../assets/random-beer.png"
import newBeer from "./../assets/new-beer.png"


function HomePage() {
    return (
        <div>
            <h1>BEER! BEER! BEER!</h1>
            <hr />
            <br />
            <img src={beers} alt="beers" />
            <br />
            <Link to={'/beers'} className='nav-link'><h3>See all of our beers</h3></Link>
            <br />
            <img src={randomBeer} alt="random beer" />
            <br />
            <Link to={'/random-beer'} className='nav-link'><h3>Check out a random beer</h3></Link>
            <br />
            <img src={newBeer} alt="new beer" />
            <br />
            <Link to={'/new-beer'} className='nav-link'><h3>Create your own beer</h3></Link>
        </div>
    )
}

export default HomePage