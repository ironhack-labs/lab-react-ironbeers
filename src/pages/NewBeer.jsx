import React, { Component } from 'react'
import apiHandler from '../api/apiHandler'
import Header from '../componets/Header';
import { Form, Label, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";

export class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        description: '',
        contributed_by: '',
        success:false,
    }
    
    handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        const value = event.target.value;
        const key = event.target.name;
        this.setState({
          [key]: value,
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        // plantAPI.createOne(this.state)
        console.log(this.state)
    
        apiHandler
          .createOneBeer(
          this.state
          )
          .then((apiRes) => {
            this.setState({ success: true });
            // this.props.history.push("/plants");
          })
          .catch((error) => {
            console.log(error);
          });
      };



    render() {
        if (this.state.success) {
            return <Redirect to="/beers" />;
          }
        return (
            <div>
                <Header/>
                <Form onSubmit={this.handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input onChange={this.handleChange} id="name" name="name" type="text"></Input>

                <Label htmlFor="tagline">tagline</Label>
                <Input onChange={this.handleChange} id="tagline" name="tagline" type="text"></Input>

                <Label htmlFor="description">description</Label>
                <Input onChange={this.handleChange} id="description" name="description" type="text"></Input>

                <Label htmlFor="first_brewed">first_brewed</Label>
                <Input onChange={this.handleChange} id="first_brewed" name="first_brewed" type="text"></Input>

                <Label htmlFor="attenuation_level">brewers_tips</Label>
                <Input onChange={this.handleChange} id="brewers_tips" name="brewers_tips" type="text"></Input>

                <Label htmlFor="attenuation_level">attenuation_level</Label>
                <Input onChange={this.handleChange} id="attenuation_level" name="attenuation_level" type="number"></Input>

                <Label htmlFor="contributed_by">contributed_by</Label>
                <Input onChange={this.handleChange} id="contributed_by" name="contributed_by" type="text"></Input>
                    
                    <button>Add a beer</button>
                </Form>
            </div>
        )
    }
}

export default NewBeer
