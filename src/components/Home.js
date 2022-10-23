import {NavLink} from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
 

function Home(){
    return(
        <>
            <div>
                <img src={beers} alt="beers"/>
                <NavLink to="/beers"><p>All Beers</p></NavLink>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt eligendi, impedit, reprehenderit consectetur veritatis facilis saepe molestias et tenetur quam illo optio aliquid beatae assumenda, iusto facere fuga repellat.</p>
            </div>

            <div>
                <img src={newBeer} alt="random beers"/>
                <NavLink to="/random"><p>Random Beer</p></NavLink>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt eligendi, impedit, reprehenderit consectetur veritatis facilis saepe molestias et tenetur quam illo optio aliquid beatae assumenda, iusto facere fuga repellat.</p>
            </div>

            <div>
                <img src={randomBeer} alt="new beers"/>
                <NavLink to="/new"><p>New Beer</p></NavLink>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt eligendi, impedit, reprehenderit consectetur veritatis facilis saepe molestias et tenetur quam illo optio aliquid beatae assumenda, iusto facere fuga repellat.</p>
            </div>
            
        </>
    )
}

export default Home;