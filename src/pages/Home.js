import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div >
            <div>
                <img src={beers} alt='beers' />
                <h2><Link to='/beers'>All Beers</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illum, debitis ab excepturi alias consectetur possimus magnam voluptatum temporibus molestiae id quasi officia non, dolorum distinctio facere autem accusamus. Laboriosam?</p>
            </div>
            <div>
                <img src={newBeer} alt='newBeer' />
                <h2><Link to='/random-beer'>Random Beer</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illum, debitis ab excepturi alias consectetur possimus magnam voluptatum temporibus molestiae id quasi officia non, dolorum distinctio facere autem accusamus. Laboriosam?</p>
            </div>
            <div>
                <img src={randomBeer} alt='randomBeer' />
                <h2><Link to='/new-beer'>New Beer</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illum, debitis ab excepturi alias consectetur possimus magnam voluptatum temporibus molestiae id quasi officia non, dolorum distinctio facere autem accusamus. Laboriosam?</p>
            </div>
        </div>
    )
}