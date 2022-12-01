import { Link } from 'react-router-dom'
import { Container, Button } from "react-bootstrap"



const Index = () => {

    return (

        <Container>
            <h1>Beers</h1>
            <Link to="/beers">
                    <Button variant="dark">Beers List</Button>
                </Link>
                <Link to="/beers/new">
                    <Button variant="dark">Add Beers</Button>
                </Link>


           
        </Container>
    )
}

export default Index
