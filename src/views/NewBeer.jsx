import React, { Component } from 'react';
import Header from './../components/Header';
import { FormGroup, Input, Label, Form } from 'reactstrap';
import apiHandler from '../api/apiHandler';

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    const key = event.target.name;
    let value=event.target.value;
    if(event.target.type==="number"){
        this.setState({ [key]: parseInt(value,10) });
    }
    
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
   
        apiHandler
          .createBeer(this.state)
          .then((res) => {
            console.log(res);
            // this.setState({ beer: res.data });
          })
          .catch((error) => console.log(error));
      
};


  render() {
    return (
      <div>
        <div>
          {' '}
          <Header />
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input plaintext name="name" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="tagline">Tagline</Label>
              <Input plaintext name="tagline" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="first_brewed">First Brewed</Label>
              <Input plaintext name="first_brewed" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="brewers_tips">Brewers Tips</Label>
              <Input plaintext name="brewers_tips" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="attenuation Level">Attenuation Level</Label>
              <Input
                type="number"
                name="attenuation_level"
                id="exampleNumber"
                placeholder="Attenuation Level"
                onChange={this.handleChange}
                
              />
            </FormGroup>
            <FormGroup>
              <Label for="contributed_by">Contributed By</Label>
              <Input plaintext name="contributed_by" onChange={this.handleChange}/>
            </FormGroup>
            <button>Add New Beer</button>
          </Form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
