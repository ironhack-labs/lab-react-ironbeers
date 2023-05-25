import { Container } from "react-bootstrap"
import CreateBeerForm from "../../components/CreateBeerForm/CreateBeerForm"

const CreateBeerPage = () => {
    console.log("hey")

    return (
        <Container>
            <h1>New Beer</h1>
            <hr />
            <CreateBeerForm />
        </Container>
    )
}

export default CreateBeerPage