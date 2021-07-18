import React, { Component } from 'react';
import MyNav from './MyNav';
import {Form, Button} from 'react-bootstrap';

class NewBeer extends Component {

    render() {
        return (
            <div>
                <MyNav />
                <h2>Add a New Beer</h2>
                <Form onSubmit={this.props.onAdd}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter name"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTagline">
                        <Form.Label>Tagline: </Form.Label>
                        <Form.Control name="tagline" type="text" placeholder="Enter tagline"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDesription">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control name="description" type="text" placeholder="Enter description"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFirstBrewed">
                        <Form.Label>First Brewed: </Form.Label>
                        <Form.Control name="firstBrewed" type="text" placeholder="Enter when first brewed"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBrewerTips">
                        <Form.Label>Brewer tips: </Form.Label>
                        <Form.Control name="brewerTips" type="text" placeholder="Enter brewer tips"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formaAttenuationLevel">
                        <Form.Label>Attenuation Level: </Form.Label>
                        <Form.Control name="attenuationLevel" type="number" placeholder="Enter attenuation level"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formaContributedBy">
                        <Form.Label>Contributed By: </Form.Label>
                        <Form.Control name="contributedBy" type="text" placeholder="Enter contributor"></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default NewBeer;