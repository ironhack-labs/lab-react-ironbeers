import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import './NewBeer.css';

export default class NewBeer extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      tagline:'',
      description:'',
      first_brewed:'',
      brewers_tips:'',
      attenuation_level:0,
      contributed_by:''

    }
  }

  handleChange = (event) =>{
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {

    event.preventDefault();

    let {name, tagline, description, first_brewed, brewers_tips, contributed_by} = this.state

    console.log(this.state);
    
    var attenuation_level = parseInt(this.state.attenuation_level);
    axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by  })
    .then( () => {
      this.setState({title: "", description: "", });
    })
    .catch( error => console.log(error) )
  }

  FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  };

  render() {
    return (
      <div className='form-section'>
        <form onSubmit={this.handleFormSubmit}>
          <this.FieldGroup 
          id="formControlsName" 
          type="text" 
          label="Name" 
          onChange={e => this.handleChange(e)}
          name='name'
          />
          <this.FieldGroup
            id="formControlsTagline"
            type="text"
            label="Tagline"
            onChange={e => this.handleChange(e)}
            name='tagline'
          />
          <this.FieldGroup
            id="formControlsDescription"
            label="Description"
            type="text"
            onChange={e => this.handleChange(e)}
            name='description'
          />
          <this.FieldGroup
            id="formControlsTagline"
            type="text"
            label="First Brewed"
            onChange={e => this.handleChange(e)}
            name='first_brewed'
          />
          <this.FieldGroup
            id="formControlsTagline"
            type="text"
            label="Brewers Tips"
            onChange={e => this.handleChange(e)}
            name='brewers_tips'
          />
          <this.FieldGroup
            id="formControlsTagline"
            type="number"
            label="Attenuation Level"
            onChange={e => this.handleChange(e)}
            name='attenuation_level'
          />
          <this.FieldGroup
            id="formControlsTagline"
            type="text"
            label="Contributed By"
            onChange={e => this.handleChange(e)}
            name='contributed_by'
          />
          <Button type="submit" value="Submit" >Submit</Button>
        </form>
      </div>
    );
  }
}
