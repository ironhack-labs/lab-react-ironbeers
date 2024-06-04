import { Link } from "react-router-dom";
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

 
function HomePage() {


    
    return(

        <div>
            
        <Link to='/beers' > 
        <div>
            <h1>All Beers</h1>
            <img src={beers} />
        </div>
        
        </Link>
        <Link to='/random-beer' >
        <div>
            <h1>Random Beer</h1>
            <img src={randomBeer} />
        </div>
        </Link>
        <Link to='/new-beer' >
        <div>
            <h1>New Beer</h1>
            <img src={newBeer} />
        </div>
        </Link>
        </div>
    )
}




export default HomePage;
