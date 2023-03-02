import { Link } from "react-router-dom"
import './HomePage.css'

import imgBeers from '../../assets/beers.png'
import imgNewBeer from '../../assets/new-beer.png'
import imgRandomBeer from '../../assets/random-beer.png'


function HomePage() {
    return (
        <div className="HomePage">
            <div>
                <Link to="/beers">
                    <img src={imgBeers} alt="beers image" />
                    <h3>Listado de servesitas</h3>
                </Link>

            </div>

            <div>
                <Link to="/new-beer">
                    <img src={imgNewBeer} alt="new beer image" />
                    <h3>Nueva servesita</h3>
                </Link>

            </div>

            <div>
                <Link to="/random-beer">
                    <img src={imgRandomBeer} alt="random beer image" />
                    <h3>Servesita random</h3>
                </Link>

            </div>

        </div>
    );
}

export default HomePage