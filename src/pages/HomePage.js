import { Link } from 'react-router-dom';
import beerImage from './../assets/beers.png'
import newBeerImage from './../assets/new-beer.png'
import randomBeerImage from './../assets/random-beer.png'

function HomePage() {
    
    return (
        <>
            <nav>
                <div>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'grey' }} to="/beers">
                            <div>
                                <img src={beerImage} alt='' />
                                <h3>All Beers</h3>
                                <p>Here you can fin all beers that we have availiable</p>
                            </div>
                        </Link>
                    </div>
                    <div><Link style={{ textDecoration: 'none', color: 'grey' }} to="/random-beer">
                        <div>
                            <img src={randomBeerImage} alt='' />
                            <h3>Random Beer</h3>
                            <p>Here you can find a random beer</p>
                        </div>
                    </Link></div>
                    <div><Link style={{ textDecoration: 'none', color: 'grey' }} to="/new-beer">
                        <div>
                            <img src={newBeerImage} alt='' />
                            <h3>New Beer</h3>
                            <p>Here you can create a new Beer</p>
                        </div>
                    </Link></div>
                </div>
            </nav>

        </>
    )
}

export default HomePage;