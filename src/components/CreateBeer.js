import React from 'react'
import Nav from './Nav'
import {Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default function CreateBeer(props) {

    return (
        <div>
            <Nav />
            {
    
            props.toHome ? <Redirect to="/" /> :

            <Form onSubmit={props.onCreate} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control name="tagline" type="text" placeholder="Enter tagline" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows="3" type="text" placeholder="Enter description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control name="firstBrewed" type="text" placeholder="Enter first brewed" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Brewers tips</Form.Label>
                    <Form.Control name="brewTips" type="text" placeholder="Enter Brewers tips" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control name="attenuation" type="number" placeholder="Enter attenuation level" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control name="contributedBy" type="text" placeholder="Enter contributed by" />
                </Form.Group>
                <Button className="add-btn" variant="primary" type="submit">
                    ADD NEW
                </Button>
            </Form>
            }
        </div>
    )
}
