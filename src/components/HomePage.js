import { NavLink } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

function HomePage() {
    return (
        <div>
            <section>
                <img src={beers} alt='beers'/>
                <p><NavLink to='/beers'>All Beers</NavLink></p>
                <p>Click on over to the list of all our fantastic beers</p>
            </section>

            <section>
                <img src={randomBeer} alt='random beer'/>
                <p><NavLink to='/random-beer'>Random Beer</NavLink></p>
                <p>Find out more information about a random beer</p>
            </section>

            <section>
                <img src={newBeer} alt='new beer'/>
                <p><NavLink to='/new-beer'>New Beer</NavLink></p>
                <p>Add a new beer to our database</p>
            </section>
        </div>
    )
}

export default HomePage;