import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <ul>
                <li><Link to="/beers">All Beers</Link></li>
                <li><Link to='/random-beer'>Random Beers</Link></li>
                <li><Link to='/new-beer'>Add a new  beer</Link></li>
            </ul>
        </div>
        
    )
}

export default HomePage;
