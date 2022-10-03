import beersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'
import {Routes,Route,NavLink, Link} from 'react-router-dom'

function Home(){
    return(
        <div id='home'>
            <img className="home-banner" src={beersImg} alt='beers' />         
            <Link style={{textDecoration:'none'}}to='/all-beers'><h1>All Beers</h1></Link>                        
            <img className="home-banner" src={newBeerImg} alt='beers' />
            <Link to='/random-beer'><h1>Random Beer</h1> </Link>    
            <img className="home-banner" src={randomBeerImg} alt='beers' />
            <Link to='/new-beer'><h1>New Beer</h1> </Link>    
        </div>
    )
}

export default Home;