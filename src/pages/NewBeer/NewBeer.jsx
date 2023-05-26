import NavBar from "../../components/NavBar/NavBar"
import { Container } from "react-bootstrap"
import NewBeerForm from "../../components/NewBeerForm/NewBeerForm"


const NewBeer = () => {




    return (
        <Container>
            <NavBar />
            <h1>New Beer</h1>
            <hr />
            <NewBeerForm />
        </Container>
    )
}


export default NewBeer
