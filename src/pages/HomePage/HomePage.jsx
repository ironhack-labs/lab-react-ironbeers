import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

function HomePage() {
    return (
        <div>
            <h1>Bienvenid@s a la página oficial de Ironbeers!!</h1>
            <hr />
            <Link to="/beers">
                <img src={beers} alt="beers" />
                <Button variant="dark"> Ir a todas las cervezas!</Button>
            </Link>
            <Link to="/random-beer">
                <img src={newBeer} alt="newBeer" />
                <Button variant="dark"> Cerveza Random!</Button>
            </Link>
            <Link to="/new-beer">
                <img src={randomBeer} alt="randomBeer" />
                <Button variant="dark"> Crea una nueva cerveza!</Button>
            </Link>
        </div>
    )
}

export default HomePage