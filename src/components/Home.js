import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Home() {
    return (
        <div className='Home'>
            
            <Link className='Link' to={'/beers'}>
                <img src={beers} alt='beers' />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </Link>
            <Link className='Link' to={'/random-beer'}>
                <img src={randomBeer} alt='random beer' />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </Link>
            <Link className='Link' to={'/new-beer'}>
                <img src={newBeer} alt='new beer' />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </Link>
        </div>
    )
}

export default Home;