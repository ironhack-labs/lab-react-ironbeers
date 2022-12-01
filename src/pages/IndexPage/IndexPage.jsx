import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

const IndexPage = () => {
    return (
        <div className="IndexPage">
            <img src={beers} alt='' />
            <Link to="/beers">
                <Button as="div" variant="dark">All Beers</Button>
            </Link>
            <img src={randomBeer} alt='' />
            <Link to="/random-beer">
                <Button as="div" variant="dark">Random Beer</Button>
            </Link>
            <img src={newBeer} alt='' />
            <Link to="/new-beer">
                <Button as="div" variant="dark">New Beer</Button>
            </Link>

        </div>
    );
}

export default IndexPage;
