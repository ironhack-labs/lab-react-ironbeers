import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import BeersAxios from '../services/beerAxios';
import { useNavigate } from "react-router-dom";

const CreateBeer = () => {
    const navigate = useNavigate();
    const beerAxios = new BeersAxios();
    const [newBeer, setNewBeer] = useState({});

    const updateNewBeer = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewBeer({ ...newBeer, [name]: value });
    };

    const createNewBeer = (eventHTML) => {
        eventHTML.preventDefault();
        beerAxios.createBeer(newBeer).then(() => {
            navigate('/beers');
        })
            .catch(e => console.log(e))
    }


    return (
        <>
            <Form onSubmit={createNewBeer}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Beer Name</Form.Label>
                    <Form.Control
                        name='name'
                        onChange={updateNewBeer}
                        type='text'
                        placeholder='name'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Tagline Image</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='tagline'
                        onChange={updateNewBeer}
                        name='tagline'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        name='description'
                        onChange={updateNewBeer}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='first brewed'
                        onChange={updateNewBeer}
                        name='first_brewed'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>brewers_tips</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='brewers_tips'
                        onChange={updateNewBeer}
                        name='brewers_tips'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='attenuation_level'
                        onChange={updateNewBeer}
                        name='attenuation_level'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='contributed_by'
                        onChange={updateNewBeer}
                        name='contributed_by'
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Create Beer
                </Button>
            </Form>
        </>
    );
};

export default CreateBeer;
