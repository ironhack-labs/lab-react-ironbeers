import { Link } from "react-router-dom";
import homeImage from './../../assets/beers.png' 

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <hr />
           <img src={homeImage} alt="image" className="mb-4"/>
            <br></br>
            <Link to="/beers" >List of beers</Link>
            <br></br>
            <Link to="/random-beer">Random Beer</Link>
            <br></br>
            <Link to="/new-beer">New Beer</Link>
        </div>
    );
}

export default HomePage;