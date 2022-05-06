import { Container, Card } from "react-bootstrap"
import NavBar from "../../../components/Navbar/NavBar"

const NewBeer = () => {
    return (
        <>
         <NavBar/>
        <Container className="mb-5 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>New Beer</Card.Title>
                    <Card.Img variant="top" src="../../images/new-beer.png" />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}

export default NewBeer