import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import Service from '../../service/Beer.service'

class BeerForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            beer: {
                name: "",
                description: "",
                attenuation_level: "",
                tagline: "",
                first_brewed: "",
                image_url: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this._service.postBeer(this.state.beer)
            .then(x => {
                this.props.closeModalWindow()
                this.props.updateBeersList()
            })
            .catch(err => console.log(err))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            beer: { ...this.state.beer, [name]: value }
        })
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this._service
    //       .postBeer(this.state)
    //       .then(x => alert('You have add a new Beer, press "Back" to Go in Beers View'))
    //       .catch(err => console.log(err));
    //   };
    
    //   handleInputChange = e => {
    //     let { name, value } = e.target;
    //     this.setState({ [name]: value });
    //   };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" onChange={this.handleInputChange} value={this.state.attenuation_level} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First_brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" onChange={this.handleInputChange} value={this.state.first_brewed} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.description} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" onChange={this.handleInputChange} value={this.state.tagline} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen URL</Form.Label>
                    <Form.Control type="text" name="image_url" onChange={this.handleInputChange} value={this.state.image_url} />
                </Form.Group>
                <Button variant="danger" type="submit">Crear cervecita</Button>
            </Form>
        )
    }
}


export default BeerForm