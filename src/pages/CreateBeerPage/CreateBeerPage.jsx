import { Container } from "react-bootstrap"
import NewBeerForm from "../../components/NewBeerForm/NewBeerForm"
import Header from "../../components/Header/Header"

const CreateBeerPage = () => {

    return (
        <>
            <Header />
            <Container className="mt-3">
                <h1>Create new beer</h1>
                <hr />
                <NewBeerForm />
            </Container>
        </>
    )
}

export default CreateBeerPage
