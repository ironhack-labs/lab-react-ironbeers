import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from "../assets/beers.png"
import random from "../assets/random-beer.png"
import beer from "../assets/new-beer.png"

const HomePage = () => {

    return (

        <Container>
            <Link to="/beers">
                <article>
                    <img src={beers} ></img>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus bibendum interdum. In mattis vulputate metus, vel facilisis lectus pellentesque non.</p>
                </article>
            </Link>
            <Link to="/random">
            <article>
                <img src={random} ></img>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus bibendum interdum. In mattis vulputate metus, vel facilisis lectus pellentesque non.</p>
            </article>
            </Link>
            <Link to="new">
            <article>
                <img src={beer} ></img>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus bibendum interdum. In mattis vulputate metus, vel facilisis lectus pellentesque non.</p>
            </article>
        </Link >

        </Container>
    )
}

export default HomePage