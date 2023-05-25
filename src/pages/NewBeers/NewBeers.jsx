import { Container, Row } from "react-bootstrap"
import NewBeersForm from "../../components/NewBeersForm/NewBeersForm"

const NewBeers = () => {

    return (
        <>
            <Container>
                <h1>New Beers</h1>
                <hr />
            </Container>
            <Row>
                <Container>
                    <NewBeersForm />
                </Container>
            </Row>

        </>
    )
}

export default NewBeers