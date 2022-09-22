import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import BeerAxios from '../services/BeerAxios';

function BeerForm() {
    const [newBeer, setNewBeer] = useState({})
    const beerAxios = new BeerAxios()
    const navigate = useNavigate()

    const updateNewBeer = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewBeer({ ...newBeer, [name]: value });
    };

    const createNewBeer = (eventHTML) => {
        eventHTML.preventDefault();
        beerAxios.createNewBeer(newBeer)
            .then(() => {
                navigate('/beers');
            })
            .catch((err) => console.log(err))
    }

    return (
        <Container>
            <Form onSubmit={createNewBeer}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' onChange={updateNewBeer} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name='tagline' onChange={updateNewBeer} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name='description' onChange={updateNewBeer} rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" name='first_brewed' onChange={updateNewBeer} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Brewer Tips</Form.Label>
                    <Form.Control type="text" name='brewers_tips' onChange={updateNewBeer} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="text" name='attenuation_level' onChange={updateNewBeer} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contributed by</Form.Label>
                    <Form.Control type="text" name='contributed_by' onChange={updateNewBeer} />
                </Form.Group>




                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default BeerForm;