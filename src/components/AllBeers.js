import beerPic from '../assets/beers.png'
import { Link } from 'react-router-dom';
const AllBeers = () => {
    return(
        <Link to='/beers'>
        <div className='home'>
        <img src={beerPic} alt=''/>
        <h1 className='home-h1'>All Beers</h1>
        <p className='home-p'> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
        </div>
        </Link>
    )
  
}
export default AllBeers;