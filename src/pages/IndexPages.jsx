import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randombeer from '../assets/random-beer.png'
import newbeer from '../assets/new-beer.png'

const IndexPage = () => {

    return (
        <>
            <Container>
                <img src={beers} alt="beers" />
                <hr />
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores placeat qui tenetur aut voluptatum ipsum hic quos numquam quam est optio repellat, sequi dolores voluptas deserunt laboriosam neque saepe accusantium!</p>
                <Link to="/beers">
                    <Button variant="dark" size='lg'>ALL BEERS</Button>
                </Link>
            </Container>

            <Container>
                <img src={randombeer} alt="random-beer" />
                <hr />
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores placeat qui tenetur aut voluptatum ipsum hic quos numquam quam est optio repellat, sequi dolores voluptas deserunt laboriosam neque saepe accusantium!</p>
                <Link to="/random-beer">
                    <Button variant="dark" size='lg'>RANDOM BEER</Button>
                </Link>
            </Container>

            <Container>
                <img src={newbeer} alt="new-beer" />
                <hr />
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores placeat qui tenetur aut voluptatum ipsum hic quos numquam quam est optio repellat, sequi dolores voluptas deserunt laboriosam neque saepe accusantium!</p>
                <Link to="/new-beer">
                    <Button variant="dark" size='lg'>CREATE NEW BEER</Button>
                </Link>
            </Container>
        </>
    )
}

export default IndexPage