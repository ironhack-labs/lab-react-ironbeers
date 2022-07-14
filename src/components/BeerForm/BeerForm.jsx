import { Form, Button } from 'react-bootstrap'
import { useState } from "react"
import apiService from '../ApiService/ApiService'

const BeerForm = () => {
    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    })

    const {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
    } = beerData;

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        setBeerData({
            ...beerData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        apiService
            .newBeer(beerData)

            .catch((err) => console.log(err))
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    type="text"
                    value={description}
                    onChange={handleInputChange}
                    name="description"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>tagline (m)</Form.Label>
                <Form.Control
                    type="text"
                    value={tagline}
                    onChange={handleInputChange}
                    name="tagline"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inversions">
                <Form.Label>first_brewed</Form.Label>
                <Form.Control
                    type="text"
                    value={first_brewed}
                    onChange={handleInputChange}
                    name="first_brewed"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inversions">
                <Form.Label>brewers_tips</Form.Label>
                <Form.Control
                    type="text"
                    value={brewers_tips}
                    onChange={handleInputChange}
                    name="brewers_tips"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inversions">
                <Form.Label>attenuation_level</Form.Label>
                <Form.Control
                    type="text"
                    value={attenuation_level}
                    onChange={handleInputChange}
                    name="attenuation_level"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inversions">
                <Form.Label>contributed_by</Form.Label>
                <Form.Control
                    type="text"
                    value={contributed_by}
                    onChange={handleInputChange}
                    name="contributed_by"
                />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">
                    Crear Beer
                </Button>
            </div>
        </Form>
    );
};
export default BeerForm
