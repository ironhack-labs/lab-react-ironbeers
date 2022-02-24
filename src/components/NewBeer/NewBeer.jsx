import { useState } from 'react'
import {Form, Button, Container  } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import beersService from '../../services/beers.service'

function NewBeer() {
 
    const [beer, setBeer] = useState([])

        const handleInputChange = e => {

        const { value, name } = e.target

        setBeer({
            ...beer,
            [name]: value
        })
    }

    const handlerSumbit = e => {
        e.preventDefault()
    
        beersService
            .postNewBeer(beer)
            .then(()=><Navigate to='/' />)
            .catch(err=> console.log(err))
    }
    return ( 
        <Container>

            <Form  onSubmit={handlerSumbit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Beer name" onChange={handleInputChange} name="name"/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" placeholder="tagline" onChange={handleInputChange} name="tagline"/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Beer description" onChange={handleInputChange} name="description"/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="first_brewed">
                    <Form.Label>First brewed</Form.Label>
                    <Form.Control type="text" placeholder="Beer first brewed" onChange={handleInputChange} name="first_brewed"/>

                </Form.Group>                                
                <Form.Group className="mb-3" controlId="brewers_tips">
                    <Form.Label>Brewers tips</Form.Label>
                    <Form.Control type="text" placeholder="Beer brewers tips" onChange={handleInputChange} name="brewers_tips"/>

                </Form.Group>   
                <Form.Group className="mb-3" controlId="attenuation_level">
                    <Form.Label>Attenuation level</Form.Label>
                    <Form.Control type="number" placeholder="Beer attenuation level" onChange={handleInputChange} name="attenuation_level"/>

                </Form.Group> 
                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label>Contributed by</Form.Label>
                    <Form.Control type="text" placeholder="Contributed by" onChange={handleInputChange} name="contributed_by"/>

                </Form.Group> 


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
      
        
        </Container>

     )
}

export default NewBeer