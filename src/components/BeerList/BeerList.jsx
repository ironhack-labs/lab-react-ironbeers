import BeerCard from "../BeerCard/BeerCard"
import beerService from "../../services/beerServers"
import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import NewBeerForm from "../NewBeerForm/NewBeerForm"

const BeerList = () => {

    const [beers, setBeer] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }


    return (<>
        <Button variant="dark" size="sm" onClick={() => setShowModal(true)}>Crear nueva cerveza</Button>
        {
            !beers
                ?
                "Cargnado"
                :
                < BeerCard Updatebeers={beers} />
        }


        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva Cerveza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewBeerForm closeModal={() => setShowModal(false)} updateList={loadBeer} />
            </Modal.Body>
        </Modal>
    </>

    )
}





export default BeerList