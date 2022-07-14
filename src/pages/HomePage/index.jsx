import HomeHero from './../../components/HomeHero';

import { Link } from 'react-router-dom';

import beersImg from './../../assets/beers.png'
import randomBeerImg from './../../assets/random-beer.png'
import newBeerImg from './../../assets/new-beer.png'

import Container from 'react-bootstrap/Container';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sem a ante tempor finibus. Phasellus non risus orci. Etiam vitae mi accumsan felis facilisis mattis mattis non odio"

const Home = () => {

    return (
        <Container>
            <Link to="/listbeers" style={{ textDecoration: 'none', color: 'black' }}>
                <HomeHero name="All Beers" description={lorem} imgUrl={beersImg} />
            </Link>

            <Link to="/randombeer" style={{ textDecoration: 'none', color: 'black' }}>
                <HomeHero name="Random Beer" description={lorem} imgUrl={randomBeerImg} />
            </Link>

            <Link to="/newbeer" style={{ textDecoration: 'none', color: 'black' }}>
                <HomeHero name="New Beer" description={lorem} imgUrl={newBeerImg} />
            </Link>
        </Container>
    )
}

export default Home