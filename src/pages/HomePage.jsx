import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <div>
                <div>
                <img src=".\src\assets\beers.png"></img>
                </div>
                <div>
                <Link to="/beers"> <h2> All Beers</h2> </Link>
                </div>
            </div>
            
            <div>
                <div>
                <img src=".\src\assets\random-beer.png"></img>
                </div>
                <div>
                <Link to="/random-beer"><h2>Random Beer </h2>  </Link>
                </div>
            </div>
            
            <div>
                <div>
                <img src=".\src\assets\new-beer.png"></img>
                </div>
                <div>
                <Link to="/new-beer"> <h2>New Beer</h2>  </Link>
                </div>
            </div>
            
        </div>
    )
    
}

export default HomePage;
