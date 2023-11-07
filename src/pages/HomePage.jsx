import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div style={{textAlign:"center"}}>
        <img src="src/assets/beers.png" alt="" />
        <h1><Link to="/beers">All Beers Page</Link></h1>
        <p>All beers are wonderful beers</p>
        <img src="src/assets/random-beer.png" alt="" />
        <h1><Link to="/random-beer">Random Beer</Link></h1>
        <p>Random Beers are also wonderful beers</p>
        <img src="src/assets/new-beer.png" alt="" />
        <h1><Link to="/new-beer">New Beer</Link></h1>
        <p>New Beers are important to disrupt the scene</p>
        </div>
    )
}

export default HomePage;
