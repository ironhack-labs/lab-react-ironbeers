import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import BeersList from "../components/BeersList/BeersList"


const BeersPage = () => {

 return (

        <>
            <Container>
                <h1>List of all our Beers</h1>
             <hr />
                <BeersList />
                <Link to="/">
                    <Button variant="dark">Back to home</Button>
                </Link>
            </Container>
        </>
    )
}

export default BeersPage