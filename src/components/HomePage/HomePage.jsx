import { Route, Router, Link } from "react-router-dom"
import Navigation from "./NavBar/NavBar"
import Beer from "./../../assets/beers.png"
import RandomBeer from "./../../assets/random-beer.png"
import NewBeer from "./../../assets/new-beer.png"

const HomePage = () => {
    return (

        <div>

            <h1>Home Page</h1>
            <div className="m-5">
                <img src={Beer} alt="" />
                <br />
                <Link to="/beers">All Beers</Link>
            </div>
            <div className="m-5">
                <img src={RandomBeer} alt="" />
                <br />
                <Link to="/random-beer">Random Beer</Link>
            </div>
            <div className="m-5">
                <img src={NewBeer} alt="" />
                <br />
                <Link to="/new-beer">New Beer</Link>

            </div>
        </div>
    )
}
export default HomePage