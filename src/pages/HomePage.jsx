import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
function HomePage() {
    return(
        <>
        <div>
            <Link to="/beers">
                
                 <img src = {beersImg} />
                 <h4>All Beers</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam maxime ducimus, id exercitationem pariatur veritatis tempore earum culpa deserunt dignissimos voluptas adipisci sit provident omnis corrupti nihil quibusdam optio.</p>
            
            </Link>
            <Link to="/random-beer">
                <img src = {randomBeerImg} />
                <h4>Random Beer</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam maxime ducimus, id exercitationem pariatur veritatis tempore earum culpa deserunt dignissimos voluptas adipisci sit provident omnis corrupti nihil quibusdam optio.</p>
            </Link>
            <Link to="/new-beer">
                <img src = {newBeerImg} />
                <h4>New Beer</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam maxime ducimus, id exercitationem pariatur veritatis tempore earum culpa deserunt dignissimos voluptas adipisci sit provident omnis corrupti nihil quibusdam optio.</p>
            </Link>
        </div>
        </>
    )
}

export default HomePage;
