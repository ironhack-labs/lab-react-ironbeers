import { Link } from "react-router-dom"
import beers from "./../../assets/beers.png"
import newBeer from "./../../assets/new-beer.png"
import randomBeer from "./../../assets/random-beer.png"


const HomePage = () => {

    return (
        <div>

            <div>
                <img src={beers} alt="" />
                <p><Link to="/beers">All beers</Link></p>
            </div>
            <div>
                <img src={randomBeer} alt="" />
                <p><Link to="/random-beer">Random beer</Link></p>

            </div>
            <div>
                <img src={newBeer} alt="" />
                <p><Link to="/new-beer">New beer</Link></p>
            </div>

        </div >
    )
}

export default HomePage