import allBeers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import { Link } from 'react-router-dom'
import { Container, Navbar } from "react-bootstrap"

const HomePage = () => {

    return (
        <>
            <Container>
                <img src={allBeers} alt="" />
                <Link to='/beers'>
                    <h1>All beers</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit iure reprehenderit error earum iste assumenda molestiae suscipit nostrum?
                    Cumque illum eum exercitationem earum minima sit error sed dolor architecto possimus.</p>
            </Container>
            <Container>
                <img src={randomBeer} alt="" />
                <Link to='/random-beer'>
                    <h1>Random beers</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit iure reprehenderit error earum iste assumenda molestiae suscipit nostrum?
                    Cumque illum eum exercitationem earum minima sit error sed dolor architecto possimus.</p>
            </Container>
            <Container>
                <img src={newBeer} alt="" />
                <Link to='/new-beer' >
                    <h1>New beers</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit iure reprehenderit error earum iste assumenda molestiae suscipit nostrum?
                    Cumque illum eum exercitationem earum minima sit error sed dolor architecto possimus.</p>
            </Container>
        </>
    )
}

export default HomePage