import { Link } from "react-router-dom";

function HomePage() {

    return(
        <div>
            <h1>IronBeers</h1>
            <Link to = "/beers">Beers</Link>
            <Link to = "/random-beer">Random Beer</Link>
            <Link to = "/new-beer">Add New Beer</Link>
        </div>
    )
}

export default HomePage;
