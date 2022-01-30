import beerNew from '../assets/new-beer.png'
import { Link } from 'react-router-dom';
const NewBeer = () => {
    return(
        <Link to='/new-beer'>
        <div className='home'>
        <img src={beerNew} alt=''/>
        <h1 className='home-h1'>New Beer</h1>
        <p className='home-p'> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
        </div>
        </Link>
    )
  
}
export default NewBeer;