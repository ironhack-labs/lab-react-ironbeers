import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default class NewBeer extends Component {
    render() {
        return (
            <div>
            <Link to={'/home'}><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' width ='100%'/></Link>
                <Form onSubmit={this.props.onAdd}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>TagLine</Form.Label>
                        <Form.Control name='tagline' type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name='description' type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control name='first_brewed' type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Brewed tips</Form.Label>
                        <Form.Control name='brewers_tips' type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Attenuation</Form.Label>
                        <Form.Control name='attenuation_level' type="number"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contributed by</Form.Label>
                        <Form.Control name='contributed_by' type="text"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
