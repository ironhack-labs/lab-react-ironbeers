import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container className="">
            <div>
                <h2>All Beers</h2>
                <Link to='/beers'>
                    <img src="../../images/beers.png" alt="Beers" />
                </Link>
            </div>
            <div>
                <h2>Random Beer</h2>
                <Link to='/random-beer'>
                    <img src="../../images/random-beer.png" alt="Beers" />
                </Link>
            </div>
            <div>
                <h2>New Beer</h2>
                <Link to='/new-beer'>
                    <img src="../../images/new-beer.png" alt="Beers" />
                </Link>
            </div>
        </Container>
    )
}

export default IndexPage