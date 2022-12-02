import { Link } from "react-router-dom"
import Beers from './../../assets/beers.png'
import RandomBeer from './../../assets/random-beer.png'
import NewBeer from './../../assets/new-beer.png'

const HomePage = () => {


    return (
        <div className="HomePage">

            <Link to="/beers">
                <img src={Beers} alt='beers' />
            </Link>
            <h2>All Beers</h2>
            <p>Qué rica la cerveza, qué rica que está...</p>

            <hr />

            <Link to="/random-beer">
                <img src={RandomBeer} alt='random beer' />
            </Link>
            <h2>Random Beer</h2>
            <p>Qué rica la cerveza, qué rica que está...</p>

            <hr />

            <Link to="/new-beer">
                <img src={NewBeer} alt='new beer' />
            </Link>
            <h2>New Beer</h2>
            <p>Qué rica la cerveza, qué rica que está...</p>

        </div>
    )
}

export default HomePage