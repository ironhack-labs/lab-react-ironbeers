import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <Container>
            <h1>Welcome to IronBeers ⭐</h1>
            <hr />
            <img src="../../images/beers.png" alt="" />
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, consequatur rerum facere minima eum magni dolores, accusantium corrupti sit amet, aliquam illo! Necessitatibus dolores cupiditate, expedita quisquam animi vel itaque!</p>
            <Link to="/beers">
                <Button variant="dark" size='lg'>Go to Beers</Button>
            </Link>
            <hr />
            <img src="../../images/random-beer.png" alt="" />
            <h3>Random Beer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, consequatur rerum facere minima eum magni dolores, accusantium corrupti sit amet, aliquam illo! Necessitatibus dolores cupiditate, expedita quisquam animi vel itaque!</p>
            <Link to="/random-beer">
                <Button variant="dark" size='lg'>Get a Random Beer</Button>
            </Link>
            <hr />
            <img src="../../images/new-beer.png" alt="" />
            <h3>New Beer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, consequatur rerum facere minima eum magni dolores, accusantium corrupti sit amet, aliquam illo! Necessitatibus dolores cupiditate, expedita quisquam animi vel itaque!</p>
            <Link to="/new-beer">
                <Button variant="dark" size='lg'>Add a Beer</Button>
            </Link>

        </Container>
    )
}

export default HomePage