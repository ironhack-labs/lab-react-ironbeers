
import { Container } from "react-bootstrap"
import { Image } from "react-bootstrap"
import RandomBeerPage from "../RandomBeer/RandomBeerPage"
import AllBeersPage from "../AllBeers/AllBeersPage"
import NewBeerPage from "../NewBeer/NewBeerPage"

import beers1 from "../../assets/beers.png"
import beers2 from "../../assets/random-beer.png"
import beers3 from "../../assets/new-beer.png"

import "./Homepage.css"
import { Link } from "react-router-dom"




const Homepage = () => {


    return (
        <>

            <Container fluid className="mainContainer">


                <Link to="/beers">
                    <h1>All Beers</h1>
                    <Image fluid src={beers1} alt="Beers" />
                </Link>
                <Link to="/random-beer">
                    <h1>Random Beer</h1>
                    <Image fluid src={beers2} alt="Beers" />
                </Link>
                <Link to="new-beer">
                    <h1>New Beer</h1>
                    <Image fluid src={beers3} alt="Beers" />
                </Link>
            </Container>
        </>

    )

}

export default Homepage