import { Link } from "react-router-dom";

function HomePage() {
    return(
        <>
        <Link to="/beers">
            <img src="../src/assets/beers.png"/>
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus quis venenatis dolor. Pellentesque non nisl justo. </p>
        </Link>

        <Link to="/random-beer">
            <img src="../src/assets/random-beer.png" />
            <h3>Random Beer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus quis venenatis dolor. Pellentesque non nisl justo. </p>
        </Link>

        <Link to="/new-beer">
            <img src="../src/assets/new-beer.png" />
            <h3>New Beer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus quis venenatis dolor. Pellentesque non nisl justo. </p>
        </Link>

        </>
    )
}

export default HomePage;
