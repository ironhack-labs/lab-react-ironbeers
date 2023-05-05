import { Link } from "react-router-dom"
import beers from "../assets/beers.png"
import random from "../assets/random-beer.png"
import newBeers from "../assets/new-beer.png"


function HomePage (){
    return (
        <nav>
        <img src={beers} alt="Beers"></img>
         <Link className="titles" to="/beers"><p>All Beers</p></Link>
         <p className="random">lorem ipsilum</p>

         <img src={random} alt="Beers"></img>
         <Link className="titles" to="/random-beers"><p>Random Beers</p></Link>
         <p className="random">lorem ipsilum</p>
         
         <img src={newBeers} alt="Beers"></img>
         <Link className="titles" to="/new-beer"><p>New Beer</p></Link>
         <p className="random">lorem ipsilum</p>
        </nav>
    )
}


export default HomePage;