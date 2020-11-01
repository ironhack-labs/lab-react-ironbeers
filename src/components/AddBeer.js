import React from 'react'
import { Form, Button } from "react-bootstrap"

export default function AddBeer(props) {
    return (
        <div>
            <Form onSubmit={props.onAdd}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name of beer" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" placeholder="Tagline" />
                </Form.Group>          
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" placeholder="First brew date" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Brewer's Tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" placeholder="Brewer's tips" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contributed by</Form.Label>
                    <Form.Control type="text" name="contributed_by" placeholder="Enter your name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
