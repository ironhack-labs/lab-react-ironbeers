import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import AllBeers from "../assets/beers.png"
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"


function HomePage() {
    const navigate = useNavigate()

    return (
        <>
        <div className="card">
            <img className="beer-img" src={AllBeers} alt="image" />
            <h3> <a href="/beers">All Beers</a></h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        <div className="card">
            <img className="beer-img" src={RandomBeer} alt="image" />
            <h3><a href="/random-beer">Random Beer</a></h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        <div className="card">
            <img className="beer-img" src={NewBeer} alt="image" />
            <h3><a href="/new-beer">New Beer</a></h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        
        </>
    )

}

export default HomePage;
