import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png';

function Home() {
    return (
        <div>
            <Link to='/beers'>
                <div className='row'>
                    <img src={allBeers} className='fluid' alt='' />
                    <div className='ms-2 mt-3 me-5 mb-3'>
                    <h1>All Beers</h1>
                    Brethren of the Coast loot red ensign Privateer chase guns reef barque spike draught jib. Chain Shot draught Cat o'nine tails come about Barbary Coast lee American Main yawl line grog blossom.</div>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div className='row'>
                    <img src={randomBeer} className='fluid' alt='' />
                    <div className='ms-2 mt-3 me-5 mb-3'>
                    <h1>Random Beer</h1>
                    Code of conduct dead men tell no tales line Jolly Roger rope's end cog bilged on her anchor six pounders port yo-ho-ho.</div>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div className='row'>
                    <img src={newBeer} className='fluid' alt='' />
                    <div className='ms-2 mt-3 me-5 mb-3'>
                    <h1>Create a Beer</h1>
                    Pink walk the plank scurvy pirate galleon gangway come about barkadeer Admiral of the Black fore dead men tell no tales. </div>
                </div>
            </Link>
        </div>
    )
}

export default Home;