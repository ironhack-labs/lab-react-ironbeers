import React from 'react';
import Header from '../components/Header';
import apiHandler from "../api/apiHandler";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewBeer extends React.Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        apiHandler.createNewBeer(this.state)
            .then((apiRes) => console.log("success"))
            .catch((error) => console.log(error))
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <Header />


                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input type="text" id="tagline" name="tagline" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input type="text" id="description" name="description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="first_brewed">First Brewed</Label>
                        <Input type="text" id="first_brewed" name="first_brewed" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="brewers_tips">Brewers tips</Label>
                        <Input type="text" id="brewers_tips" name="brewers_tips" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="attenuation_level">Attenuation level</Label>
                        <Input type="number" id="attenuation_level" name="attenuation_level" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="contributed_by">Contributed by</Label>
                        <Input type="text" id="contributed_by" name="contributed_by" onChange={this.handleChange} />
                    </FormGroup>
                    <Button style={{color:"white", background:"dodgerblue"}}>Add New</Button>

                </Form>

            </div >
        )
    }
}

export default NewBeer
