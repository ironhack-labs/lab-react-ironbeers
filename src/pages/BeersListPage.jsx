import { useState, useEffect } from 'react'
// import coastersService from '../../services/coasters.service'
import { Container, Modal } from 'react-bootstrap'
// import CoastersList from '../../components/CoastersList/CoastersList'
// import NewBeerForm from '../../components/NewCoasterForm/NewCoasterForm'
import BeersService from '../services/beers.service'


const BeersListPage = () => {

    const [beers, setBeers] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <>
            <Container>
                <h1>Beers List <span onClick={handleModalOpen}>+</span></h1>
                <hr />
                <BeersList beers={beers} />
            </Container>
        </>
    )
}

export default BeersListPage