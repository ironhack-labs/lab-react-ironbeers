import { Container, Row, Col } from 'react-bootstrap'
import beerImg from "../../assets/beers.png"
import randomImg from "../../assets/random-beer.png"
import newImg from "../../assets/new-beer.png"
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <Container>
            <h1 className='mb-5'>Welcome to Ironbeers!</h1>
            <hr />
            <Row>
                <Col>
                    <Link to="/beers">
                        <article>
                            <img src={beerImg} alt="Beers" />
                            <h2>All Beers</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque provident ipsa recusandae saepe omnis cupiditate perspiciatis reprehenderit ad aspernatur, consectetur maxime sint voluptates molestiae harum sunt obcaecati eos sapiente fugiat!</p>
                        </article>
                    </Link>
                </Col>
                <Col >
                    <Link to="/random-beer">
                        <article>
                            <img src={randomImg} alt='Random Beer' />
                            <h2>Random Beer</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, sed? Incidunt officiis illo, molestias eveniet sapiente ratione earum soluta velit quae id magnam similique, fuga ullam fugiat ad architecto omnis?</p>
                        </article>
                    </Link>
                </Col>
                <Col>
                    <Link to="/new-beer">
                        <article>
                            <img src={newImg} alt='New Beer' />
                            <h2>New Beer</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet natus ex aliquam facere accusamus repellat eveniet voluptas ratione error quis sapiente corporis, deleniti magnam eum mollitia neque animi quo aperiam!</p>
                        </article>
                    </Link>
                </Col>
            </Row>

        </Container>
    )
}

export default IndexPage