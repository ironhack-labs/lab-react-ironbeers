import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BeersList from '../../../components/BeersList/BeersList'
import beersService from '../../../services/beers.service'

const Beers = () => {
    const [beers, setBeers] = useState([])
    useEffect(() => {
        loadBeers()
    }, [])
    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <BeersList beers={beers} />
            </Container>
        </>
    )
}
export default Beers