import { Container, Row, Modal, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import Loader from "../../components/Loader/Loader"
import ListBeers from '../../components/ListBeers/ListBeers'
const ListBeersPage = () => {
    const [beer, SetBeer] = useState([])


    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getBeers()
            .then(({ data }) => SetBeer(data))
            .catch(err => console.log(err))
    }
    return (
        <Container>

            <h1>Beers Gallery</h1>

            {/* <Button variant="dark" size="sm" onClick={() => setShowModal(true)}>Crear nueva</Button> */}

            <hr />
            <Row>
                {
                    !beer
                        ?
                        <Loader />
                        :
                        <ListBeers beer={beer} />
                }
            </Row>



            {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewBeerForm closeModal={() => setShowModal(false)} updateList={loadBeers} />
                </Modal.Body>
            </Modal> */}


        </Container>
    )
}
export default ListBeersPage