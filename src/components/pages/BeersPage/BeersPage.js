import './BeersPage.css'


import BeersList from './BeersList'

import Container from 'react-bootstrap/esm/Container'
import Navigation from '../../layout/Navigation/Navigation'

const BeersPage = () => {

    return (
        <Container>
            <Navigation />

            <BeersList />

        </Container>
    )
}

export default BeersPage