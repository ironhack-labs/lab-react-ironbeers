import { Container } from "react-bootstrap"
import NewBeerForm from "../../components/NewBeerForm/NewBeerForm"
const NewBeerPage = () => {

    return (

        <Container>
            <h1>Create new beer</h1>
            <hr />
            <NewBeerForm />
        </Container>
    )
}

export default NewBeerPage