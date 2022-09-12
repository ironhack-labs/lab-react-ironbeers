import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { NavLink } from 'react-router-dom'
export default function Home() {
    return(
    <div className='Home'>
        <NavLink to="/beers"><img src={beers} alt="beer" /><h1>Beers</h1></NavLink>
        <NavLink to="/random-beer"><img src={randomBeer} alt="random beer" /><h1>Random-Beer</h1></NavLink>
        <NavLink to="/new-beer"><img src={newBeer} alt="new beer" /><h1>New Beer</h1></NavLink>
    </div>
    )}