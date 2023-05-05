import { Link } from "react-router-dom"

function Homepage() {
    return(
        <>
        <Link to="/beers">Beerlist</Link>
        <Link to="/random">Random Beer</Link>
        <Link to="/addBeer">Add Beer</Link>
        </>
    )
}

export default Homepage