import {Link} from "react-router-dom"

function HomePage() {
    return ( 
        <div>
        <h1>Ironbeers</h1>
            <Link to="/beers">All beers</Link>
            <Link to="/random-beer">Random beer</Link>
            <Link to="/new-beer">New beer</Link>
        </div>
     );
}

export default HomePage;