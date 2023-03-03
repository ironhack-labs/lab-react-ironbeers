import { Container } from "react-bootstrap";
import NewBeerForm from "../../components/NewBeerForm/NewBeerForm";

const NewBeerPage = () => {

    console.log(NewBeerForm)

    return (
        <Container>
            <h1>New beer</h1>
            <hr />
            <NewBeerForm />
        </Container>
    )
}

export default NewBeerPage

