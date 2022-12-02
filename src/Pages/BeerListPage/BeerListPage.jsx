import './BeerListPage.css'
import { Container, Button, Modal } from 'react-bootstrap';
import beersService from '../../services/beers.service'
import { useState, useEffect } from 'react';
import BeerList from '../../components/BeerList/BeerList';
import NewBeerForm from '../../components/NewBeerForm/NewBeerForm';
const BeerListPage = () => {

    const [beers, setBeers] = useState([])
    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const handleBeers = () => {
        beersService
            .getBeers()
            .then((data) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        handleBeers()
    }, [])





    const { data } = beers

    return (

        <>
            <Container>
                <h1>IronBeers List</h1>

                <hr className='mb-4 mt-3' />

                <Button onClick={openModal} variant="outline-info" size="md">Create new beer!</Button>

                {beers.length === 0 ? <h1>Loading...</h1> : <BeerList data={data} />}

            </Container >

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewBeerForm closeModal={closeModal} refreshList={handleBeers} />
                </Modal.Body>
            </Modal>
        </>


    )
}

export default BeerListPage;