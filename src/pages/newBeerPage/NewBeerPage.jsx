import Header from '../../components/header/Header'
import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import beersService from '../../services/beers.services'
import './NewBeerPage.css'
import {Navigate, useNavigate} from 'react-router-dom'



const NewBeerPage = () => {

    const [beerData, setBeerData] = useState(
        {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 5,
            contributed_by: ''
        }
    )

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {

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
                console.log(data)
                
            })
           
            
            .catch(err => console.log(err))
    }

    

    return (
        
        <div>
            <Header></Header>
            <Container className='newFormContainer'>
                <Form className='formNew' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="created">
                        <Form.Label>Fecha Creada</Form.Label>
                        <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tips">
                        <Form.Label>Tips</Form.Label>
                        <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="atenuation">
                        <Form.Label>Atenuación</Form.Label>
                        <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="creado">
                        <Form.Label>Creado por</Form.Label>
                        <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit">Crear birra</Button>
                    </div>
                </Form >
            </Container>
        </div>
    )

}

export default NewBeerPage