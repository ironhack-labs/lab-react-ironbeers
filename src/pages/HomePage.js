import {Link} from "react-router-dom"
import beers from '../assets/beers.png'
import randombeer from '../assets/random-beer.png'
import newbeer from '../assets/new-beer.png'

function HomePage(){
    return(
     <div>
     

     <div class="beers-container">
     <img src={beers} alt="beers" />
     <Link className="" to="/beers">All Beers</Link>
     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
     </div>

     <div class="random-beer-container">
     <img src={randombeer} alt="random-beer" />
     <Link className="" to="/random-beer">Random Beer</Link>
     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
     </div>

     <div class="new-beer-container">
     <img src={newbeer} alt="new-beer" />
     <Link className="" to="/new-beer">New Beer</Link>
     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
     </div>


     </div>   
    )
}

export default HomePage