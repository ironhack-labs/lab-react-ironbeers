import { Container } from 'react-bootstrap'
import NewBeerForm from '../components/NewBeerForm/NewBeerForm'

const NewBeer = () => {

    return (
        <div className="BeerForm">
            <Container>

                <h1>Nueva cerveza</h1>

                <hr />

                <NewBeerForm />

            </Container>
        </div>
    )
}

export default NewBeer