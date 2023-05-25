import { Form, Button, Row, Col, Container } from "react-bootstrap"

const NewBeersForm = () => {

    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })

    // const handleInputChange = event => {
    //     const { name, value } = event.target
    //     setCoasterData({ ...coasterData, [name]: value })
    // }

    // const handleSubmit = event => {
    //     event.preventDefault()

    //     coastersService
    //         .saveCoaster(coasterData)
    //         .then(() => {
    //             closeModal()
    //             updateList()
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <Container>

            <Form >
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline:</Form.Label>
                    <Form.Control type="text" name="tagline" />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="inversions">
                            <Form.Label>Inversiones</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="length">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>

                </Row>

                <div className="d-grid mt-3">
                    <Button variant="dark" type="submit">Crear montaña rusa</Button>
                </div>
            </Form>
        </Container>

    )
}

export default NewBeersForm