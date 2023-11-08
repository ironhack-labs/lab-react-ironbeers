import { Link } from "react-router-dom";
function HomePage() {
    return(
        <div>
                <Link to="/beers">
                    <div>
                        <img src="src/assets/beers.png"/> 
                        <h2>All Beers</h2>                   
                    </div>
                </Link>
            <Link to="/random-beer">
                <div>
                    <img src="src/assets/random-beer.png"/>
                    <h2>Random Beer</h2>
                </div>
            </Link>
            <Link to="/new-beer">
                <div>
                    <img src="src/assets/new-beer.png"/>
                    <h2>New Beer</h2>
                </div>
            </Link>
            
        </div>
    )
}

export default HomePage;
