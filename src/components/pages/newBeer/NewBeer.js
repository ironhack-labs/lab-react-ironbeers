import React, { Component } from 'react'
import BeerService from './../../service/beer.service'


import { Form, Button } from 'react-bootstrap'


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
                <>
                <h1>New Beer</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Tag line</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="length">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="number" name="length" value={this.state.length} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="inversions">
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="number" name="inversions" value={this.state.inversions} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear montaña rusa</Button>
                </Form>
            </>
    )   
    }
}

export default NewBeer
