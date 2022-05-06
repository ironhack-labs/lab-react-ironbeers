import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <Container>
                <img src='./../assets/beers.png'></img>
                <h1>Beers</h1>
                <Link to="/beers">
                    <Button variant="dark" size='lg'>Beers</Button>
                </Link>
                <hr />
                <img src='./../assets/random-beer.png'></img>
                <h1>Random Beer</h1>
                <Link to="/random-beer">
                    <Button variant="dark" size='lg'>Random Beer</Button>
                </Link>
                <hr />
                <img src='./../assets/new-beer.png'></img>
                <h1>New Beer</h1>
                <Link to="/new-beer">
                    <Button variant="dark" size='lg'>New Beer</Button>
                </Link>
            </Container>
        </>
    )
}

export default HomePage