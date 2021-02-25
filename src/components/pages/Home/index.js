import { Link } from 'react-router-dom'

import beers from './beers.png'
import newBeer from './new-beer.png'
import randomBeer from './random-beer.png'

const Home = () => {
    return (
        <>
            <img className="w-100" alt="beers" src={beers} ></img>
            <div className="px-5 py-4 border-bottom border-dark">
                <Link to="/AllBeers"><h1>All Beers</h1></Link>
                <h4 className="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </div>
            <img className="w-100" alt="random beer" src={newBeer} ></img>
            <div className="px-5 py-4 border-bottom border-dark">
                <Link to="/RandomBeer"><h1>Random Beer</h1></Link>
                <h4 className="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </div>
            <img className="w-100" alt="new beer" src={randomBeer} ></img>
            <div className="px-5 py-4 border-bottom border-dark">
                <Link to="/NewBeer"><h1>New Beer</h1></Link>
                <h4 className="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </div>
        </>
    )
}

export default Home