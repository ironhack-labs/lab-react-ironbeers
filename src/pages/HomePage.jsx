import { Link } from "react-router-dom";

function HomePage() {
    return(
        <>
        
        <h1>Home Page</h1>
        <Link to={`/beers`}>All Beers</Link>
        <br/>
        <Link to={`/random-beer`}>Random Beer</Link> 
        <br/>
        <Link to={`/new-beer`}>New Beer</Link>
        </>

    )
}

export default HomePage;
