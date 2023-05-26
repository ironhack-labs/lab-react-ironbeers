import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomePage = () => {

    return (

        <Container>
            <Row>
                <img src={beers} alt="" />
                <Link to='/beers'>
                    <h1>All Beers</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae accusamus commodi molestiae animi deleniti voluptas facere esse quaerat obcaecati ullam minima odio maxime eaque,
                    voluptatibus dolore dolor sapiente suscipit modi.</p>
            </Row>
            <Row>
                <img src={randomBeer} alt="" />
                <Link to='/random'>
                    <h1>Random Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae accusamus commodi molestiae animi deleniti voluptas facere esse quaerat obcaecati ullam minima odio maxime eaque,
                    voluptatibus dolore dolor sapiente suscipit modi.</p>
            </Row>
            <Row>
                <img src={newBeer} alt="" />
                <Link to='/new-beer'>
                    <h1>New Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae accusamus commodi molestiae animi deleniti voluptas facere esse quaerat obcaecati ullam minima odio maxime eaque,
                    voluptatibus dolore dolor sapiente suscipit modi.</p>
            </Row>
        </Container>

    )

}
export default HomePage