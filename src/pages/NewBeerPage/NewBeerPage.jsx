import { Container } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"
import NewBeerForm from "../../components/NewBeerForm/NewBeerForm"
import beerService from "../../services/beers.services"


const NewBeerPage = () => {

    return (
        <>
            <Navigation />
            <Container className="mt-3">

                <h1>New Beer</h1>
                <hr />
                <NewBeerForm />
            </Container>
        </>
    )
}

export default NewBeerPage
