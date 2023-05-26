import beersImg from "./../../assets/beers.png"
import randomImg from "./../../assets/random-beer.png"
import newImg from "./../../assets/new-beer.png"
import { Link } from "react-router-dom"
const HomePage = () => {


    return (
        <div>
            <div>
                <Link to="/beers">All Beers
                    <img src={beersImg} alt="beers" className="page-img" /></Link>
                <hr />
            </div>
            <div>
                <Link to="/random-beer">Random Beer
                    <img src={randomImg} alt="random" className="page-img" /></Link>
                <hr />
            </div>
            <div>
                <Link to="/new-beer">New Beer
                    <img src={newImg} alt="new" className="page-img" /></Link>
                <hr />
            </div>
        </div>
    )
}

export default HomePage;