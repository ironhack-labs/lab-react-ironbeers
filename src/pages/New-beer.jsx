import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import beersService from '../services/beers.service'
import { Form, Button } from 'react-bootstrap'

const NewBeer = ({ }) => {


    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {
        console.log(beerData, tagline)
        const { value, name } = e.target

        setBeerData({
            ...beerData,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        beersService
            .saveBeer(beerData)
            .then(({ data }) => {
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="NewBeer">
            NewBeer
            <Header />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>tagline</Form.Label>
                    <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstBrewed">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brewersTips">
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="attenuationLevel">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contributedBy">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="dark" type="submit">Crear cerveza</Button>
                </div>
            </Form >
        </div>
    );
}

export default NewBeer;

