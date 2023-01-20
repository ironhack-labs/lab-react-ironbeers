import beers from '../assets/beers.png'
import newBeer from "../assets/new-beer.png"
import randomBeer from '../assets/random-beer.png'
import { Link } from "react-router-dom"; 


function HomePage(){
    return(
        <div id='homepage'>
            <img src={beers} alt='beers' id='beersList'/>
        <Link to='/beers' id='linkToList'>All Beers</Link>
        <p id='listInfo'>Sagittis scelerisque donec dictumst, justo purus condimentum aliquam sapien. Vulputate ornare, suspendisse fames varius. Eros libero orci, ante etiam, arcu class taciti congue praesent ad. Inceptos feugiat nunc, condimentum habitasse, non hac nisi vivamus ultricies velit tortor. Interdum turpis urna, lacus eget, varius libero felis quis eros ligula.</p>
            <img src={newBeer} alt='beers' id='newBeer'/>
        <Link to='/randombeer' id='linkToRandom'>Random Beer</Link>
        <p id='randomInfo'>Sagittis scelerisque donec dictumst, justo purus condimentum aliquam sapien. Vulputate ornare, suspendisse fames varius. Eros libero orci, ante etiam, arcu class taciti congue praesent ad. Inceptos feugiat nunc, condimentum habitasse, non hac nisi vivamus ultricies velit tortor. Interdum turpis urna, lacus eget, varius libero felis quis eros ligula.</p>
            <img src={randomBeer} alt='beers' id='randomBeer'/>
        <Link to='/newbeer' RandomBeer id='linkToNew'>New Beer</Link>
        <p id='newInfo'>Sagittis scelerisque donec dictumst, justo purus condimentum aliquam sapien. Vulputate ornare, suspendisse fames varius. Eros libero orci, ante etiam, arcu class taciti congue praesent ad. Inceptos feugiat nunc, condimentum habitasse, non hac nisi vivamus ultricies velit tortor. Interdum turpis urna, lacus eget, varius libero felis quis eros ligula.</p>
        </div>
    )
}

export default HomePage;