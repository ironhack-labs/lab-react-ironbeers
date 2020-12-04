import React, { Component } from 'react'
import BeerService from './../../service/beer.service'


import { Container, Form, Button } from 'react-bootstrap'


class NewBeer extends Component {
  
        constructor(){
        super()
            this.state = {
                name: '',
                tagline: '',
                description: '',
                firstBrewed: '',
                brewersTips: '',
                attenuationLevel: undefined,
                contributedBy: '',
            }
            this.beerService = new BeerService()
        }
    
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    
    handleSubmit = e => {
        e.preventDefault()

        this.beerService
            .saveBeer(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }
    

        render() {
            
            return (
            <Container>
                    
                <h1>New Beer</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Tag line</Form.Label>
                        <Form.Control type="text" name="tagline" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="length">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.length} onChange={this.handleInputChange} />
                     </Form.Group>
                    <Form.Group controlId="length">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name="first_brewed" value={this.state.length} onChange={this.handleInputChange} />
                     </Form.Group>

                    <Form.Group controlId="length">
                        <Form.Label>Brewers Tips </Form.Label>
                        <Form.Control type="text" name="brewers_tips " value={this.state.length} onChange={this.handleInputChange} />
                     </Form.Group>
    
                    <Form.Group controlId="inversions">
                        <Form.Label>Attenuation Level </Form.Label>
                        <Form.Control type="number" name="attenuation_level " value={this.state.inversions} onChange={this.handleInputChange} />
                        </Form.Group>
                        
                    <Form.Group controlId="contributed_by ">
                        <Form.Label>Contributed By </Form.Label>
                        <Form.Control type="text" name="contributed_by " value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group>
                        
                    <Button variant="dark" className='btn-block' type="submit">New Beer</Button>
               
                </Form>
          </Container>
    )   
    }
}

export default NewBeer
