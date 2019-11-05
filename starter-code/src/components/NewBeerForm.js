import React from 'react';
import Header from './Header';
import InputField from './InputField';
import axios from 'axios';

class NewBeerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }
  }

  handleInputChane = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleFormSubmit} className="new-beer-form">
        <InputField label="Name" name="name" type="text" onChange={this.handleInputChane} value={this.state.name} />
        <InputField label="Tagline" name="tagline" type="text" onChange={this.handleInputChane} value={this.state.tagline} />
        <InputField label="Description" name="description" type="text" onChange={this.handleInputChane} value={this.state.description} />
        <InputField label="First Brewed" name="first_brewed" type="text" onChange={this.handleInputChane} value={this.state.first_brewed} />
        <InputField label="Brewers Tips" name="brewers_tips" type="text" onChange={this.handleInputChane} value={this.state.brewers_tips} />
        <InputField label="Attenuation Level" name="attenuation_level" type="number" onChange={this.handleInputChane} value={this.state.attenuation_level} />
        <InputField label="Contributed by" name="contributed_by" type="text" onChange={this.handleInputChane} value={this.state.contributed_by} />
        <button type="submit" className="button is-primary" >Add new</button>
        </form>
      </div>
    )
  }
}

export default NewBeerForm;
