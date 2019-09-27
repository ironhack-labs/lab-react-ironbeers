import React, { Component } from "react";
import FormCard from './FormCard'

export default class FormContainer extends Component {
  state = {
    name:'',
    tagline:'',
    description:'',
    first_brewed:'',
    brewers_tips: '',
    attenuation_level: Number,
    contributed_by: ''
  };


  handleInputs = e => {
    const { character } = this.state;
    const key = e.target.name;
    character[key] = e.target.value;
    this.setState({ character });
  };

  render() {
    return (
        <div>
            <FormCard />
        </div>
    );
  }
}
