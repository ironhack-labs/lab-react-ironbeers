import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import beersimg from "./../../assets/beers.png"
import newbeerimg from "./../../assets/new-beer.png"
import randombeerimg from "./../../assets/random-beer.png"


const HomePage = () => {

    return (
        <Container className="HomePage my-5">



            <div className="home">

                <h1>IronBeers</h1>
                <div className="beerimg mb-5 row">
                    <img src={beersimg} alt="" />
                    <Link to="/beers">
                        <Button variant="dark mt-2">All Beers</Button>
                    </Link>
                </div>
                <div className="beerimg mb-5 row">
                    <img src={newbeerimg} alt="" />
                    <Link to="/random-beer">
                        <Button variant="dark mt-2">Random Beer</Button>
                    </Link>
                </div>
                <div className="beerimg mb-5 row">
                    <img src={randombeerimg} alt="" />
                    <Link to="/new">
                        <Button variant="dark mt-2">New Beer</Button>
                    </Link>
                </div>

            </div>

        </Container>

    )
}

export default HomePage