import { Container } from "react-bootstrap"
import NewBeerForm from "../../components/NewBeerForm/NewBeerForm"

const CreateBeerPage = () => {

    return (
        <Container>
            <h1>Create new beer</h1>
            <hr />
            <NewBeerForm />
        </Container>
    )
}

export default CreateBeerPage
