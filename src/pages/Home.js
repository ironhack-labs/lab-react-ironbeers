import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import randomeBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function Home(){
    return(
        <>
            <Link to="/beers" className="card" style={{textDecoration:"none"}}>
               
                <img className="card-img-top" src={allBeersImage} alt="all beers" />
                <div className="card-body">
                    <h2 className="card-title">All Beers</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
            
            </Link>
            <Link to="/random-beer" className="card" style={{textDecoration:"none"}}>
                
                <img className="card-img-top" src={randomeBeerImage} alt="random beer"/>
                <div className="card-body">
                    <h2 className="card-title">Random Beer</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
       
           </Link>
            <Link to="/new-beer" className="card" style={{textDecoration:"none"}}>
                
                <img className="card-img-top" src={newBeerImage} alt="new beer"/>
                <div className="card-body">
                    <h2 className="card-title">New Beer</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
            </Link>
        </>
    )
}

export default Home;