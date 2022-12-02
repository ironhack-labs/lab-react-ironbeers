import './AllBeersPage.css'
import BeersList from '../../components/home /beerList/beerList'

import { Container } from 'react-bootstrap'

const BeersPage = () => {

    return (
        <Container>

            <BeersList />
        </Container>
    )
}

export default BeersPage