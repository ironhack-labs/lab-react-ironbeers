import { Link } from 'react-router-dom'
import beersImgUrl from '../assets/beers.png'
import randomBeerImgUrl from '../assets/random-beer.png'
import newBeerImgUrl from '../assets/new-beer.png'

function HomePage() {

    return (
        <div>
            <Link to='/beers'>
                <div>
                    <img src={beersImgUrl} alt="beers" />
                    <h2>All Beers</h2>
                    <p>Something</p>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div>
                    <img src={randomBeerImgUrl} alt="random-beers" />
                    <h2>Random Beer</h2>
                    <p>Something</p>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div>
                    <img src={newBeerImgUrl} alt="new-beers" />
                    <h2>New Beer</h2>
                    <p>Something</p>
                </div>
            </Link>
        </div>
    )
}

export default HomePage;
