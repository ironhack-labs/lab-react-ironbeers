import { Link } from "react-router-dom";
import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';


function Home({callbackToRandom}) {

    return (
        <div>
            <Link to="/beers" onClick={()=>{
                
                callbackToRandom("");
                }}>
                <img src={beersImg} alt="No" />
                <p>All Beers</p>
            </Link>
            <Link to="/beers" onClick={()=>{
                
                callbackToRandom("random");
                }}>
                <img src={randomBeerImg} alt="No" />
                <p>Random Beer</p>
            </Link>
            <Link to="/new-beer">
                <img src={newBeerImg} alt="No" />
                <p>New Beer</p>
            </Link>

        </div>

    )

}

export default Home;