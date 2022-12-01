import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import BeersAPI from '../services/beer.service';

const NewBeer = () => {

    const navigate = useNavigate();
    const [beer, setBeer] = useState({});

    const createNewBeer = (event) => {
        event.preventDefault();
        BeersAPI
            .createBeer(beer)
            .then(() => {
                navigate('/');
            });
    };

    const updateNewBeer = (event) => {
        const { name, value } = event.target;
        setBeer({ ...beer, [name]: value });
    };

    return (
        <Form style={{ textAlign: 'left' }} onSubmit={createNewBeer} >
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={updateNewBeer} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTagline">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" placeholder="Enter Tagline" name="tagline" onChange={updateNewBeer} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name="description" onChange={updateNewBeer} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstBrewed">
                <Form.Label>First Brewed</Form.Label>
                <Form.Control type="text" placeholder="Enter First Brewed" name="first_brewed" onChange={updateNewBeer} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBrewersTips">
                <Form.Label>Brewers Tips</Form.Label>
                <Form.Control type="text" placeholder="Enter Brewers Tips" name="brewers_tips" onChange={updateNewBeer} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAttenuationLevel">
                <Form.Label>Attenuation Level</Form.Label>
                <Form.Control type="number" placeholder="Enter Attenuation Level" name="attenuation_level" onChange={updateNewBeer} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContributedBy">
                <Form.Label>Contributed By</Form.Label>
                <Form.Control type="text" placeholder="Enter Contributed By" name="contributed_by" onChange={updateNewBeer} />
            </Form.Group>

            <Button variant="primary" type="submit">
                ADD NEW
            </Button>
        </Form>
    );
}

export default NewBeer;