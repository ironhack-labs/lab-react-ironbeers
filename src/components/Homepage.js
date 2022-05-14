import { NavLink } from "react-router-dom";
import beers from '../assets/beers.png' 
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


function Homepage() {
    return (
<div>
 
            <NavLink to="/beers">Beers</NavLink> 
            <div className='section'>
        <img className="responsive" src={beers} alt="All beers img" />

          </div>
            <NavLink to="/random-beer">Random Beer</NavLink> 
            <div className='section'>
        <img className="responsive" src={randomBeer} alt="Random beer img" />

          </div>
            <NavLink to="/new-beer">New Beer</NavLink> 
            <div className='section'>
        <img className="responsive" src={newBeer} alt="New beer img" />


          </div>
        </div>
    );
}


export default Homepage;

