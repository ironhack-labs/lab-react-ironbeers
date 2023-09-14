import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

const HomePage = () => {
    return (
        <div className="home">
            <Link to="beers"> 
                <img src={beers} alt="beersImg"/>
                <h1>ALL BEERS</h1>
                <p>Consequat ad pariatur irure est. 
                    Voluptate sunt velit et sit. 
                    Nulla enim enim adipisicing veniam qui duis sunt minim minim. 
                    Dolore est ea cupidatat incididunt deserunt irure
                </p>
            </Link>

            <Link>
            <img src={randomBeer} alt="RandomBeerImg" />
            <h1>RANDOM BEER</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Non itaque quasi rerum excepturi ea soluta blanditiis. 
                A quo debitis adipisci excepturi harum? 
                Quaerat laborum explicabo mollitia facere tenetur fuga itaque.
            </p>
            </Link>

            <Link>
            
            </Link>



        </div>
    )
}