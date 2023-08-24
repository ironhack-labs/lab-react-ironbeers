
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import beersService from "../services/beers.services";



Form

const AddBeerPage = () =>{

    const [beerData, setbeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setbeerData({ ...beerData, [name]: value })           // computed property names
    }

    const handleBeerSubmit = () =>{

        e.preventDefault()

        beersService
            .saveBeers(beerData)
            .then(() => {
            })
            .catch(err => console.log(err))

    }

    return(

        <Form onSubmit={handleBeerSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de etiqueta </Form.Label>
                <Form.Control type="text" value={beerData.name} name="name" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Lema</Form.Label>
                <Form.Control type="text" value={beerData.tagline} name="tagline" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" value={beerData.description} name="description" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Primera elaboración</Form.Label>
                <Form.Control type="text"  value={beerData.first_brewed} name="first_brewed" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Nivel de atenuación</Form.Label>
                <Form.Control type="number" value={beerData.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contribuido por</Form.Label>
                <Form.Control type="text" value={beerData.contributed_by} name="contributed_by" onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid">
                <Button variant="dark" type="submit">Crear cerveza</Button>
            </div>
        </Form>
    )
}

export default AddBeerPage;
