import { Container } from "react-bootstrap"
import { Image } from "react-bootstrap"

import "./IndexPage.css"
import { Link } from "react-router-dom"

const IndexPage = () => {

    return (

        <>

        <Container fluid className="mainContainer">


            <Link to="/beers">
                <h1>ALL BEERS</h1>
                <Image fluid src="../../img/beers.png" alt="Beers" />
            </Link>

            <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.</p>
            <hr />
                
            <Link to="/random-beer">
                <h1>RANDOM BEER</h1>
                <Image fluid src="../../img/new-beer.png" alt="Beers" />
            </Link>

            <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.</p>
            <hr />

            <Link to="new-beer">
                <h1>NEW BEER</h1>
                <Image fluid src="../../img/random-beer.png" alt="Beers" />
            </Link>

            <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.</p>
            <hr />
        </Container>
    </>
        
    )
}

export default IndexPage