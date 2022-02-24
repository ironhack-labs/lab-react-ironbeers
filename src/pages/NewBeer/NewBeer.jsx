import './NewBeer.css'
import { useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import beersService from '../../services/beers.service'

function NewBeerPage(){

    const defaultBeer = {
        'name': '',
        'tagline': '',
        'description': '',
        'first_brewed': '',
        'brewers_tips': '',
        'attenuation_level': 0,
        'contributed_by': ''
    }

    const responseObject = {
        message: '',
        variant:''
    }

    const [beerData, setBeerData] = useState(defaultBeer)
    const [serviceResponse, setServiceResponse] = useState(responseObject)
    const [showAlert, setShowAlert] = useState(false);

    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {

        const { value, name } = e.target



        setBeerData({
            ...beerData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setShowAlert(false)

        beersService
            .createNewBeer(beerData)
            .then(({ data }) => {
                console.log(data)
                setServiceResponse({
                    message: `Beer created successfully`,
                    variant: 'success'
                })
                setShowAlert(true)
                setBeerData(defaultBeer)
            })
            .catch(err => {
                setServiceResponse({
                    message: `Oh NO!!! ... there was a problem in the creation of the ne Beer. Try again later :D`,
                    variant: 'danger'
                })
                setShowAlert(true)
                setBeerData(defaultBeer)
            })
    }



    return (
        <>
            <Form onSubmit={handleSubmit} className="new-beer-form">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="first_brewed">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brewers_tips">
                    <Form.Label>Brewser Tips</Form.Label>
                    <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="attenuation_level">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">Create New Beer</Button>
                </div>
            </Form >
            {showAlert && <Alert variant={serviceResponse.variant} onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>{serviceResponse.message}</Alert.Heading>
            </Alert>}
        </>
    )
    
}

export default NewBeerPage

