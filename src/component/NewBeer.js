import React from 'react';
import { Switch } from 'react-router';
import axios from 'axios'

export default class NewBeer extends React.Component {
  state = {
    successMessage: null
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, tagline, description, first_brew, attenuation_level, contributed_by } = e.target;
    if (!name.value.length) return
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brew: first_brew.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    })
      .then(response => {
        this.setState({
          successMessage: response.data.message
        })
      })
  }

  render() {
    const message = () => {
      return this.state.successMessage && <p>{ this.state.successMessage }</p>
    }

    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <legend>New Beer</legend>
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="tagline">Tagline: </label>
            <input id="tagline" name="tagline" type="text" />
          </div>
          <div>
            <label htmlFor="descripton">Descripton: </label>
            <input id="descripton" name="description" type="text" />
          </div>
          <div>
            <label htmlFor="first_brew">First brew: </label>
            <input id="first_brew" name="first_brew" type="text" />
          </div>
          <div>
            <label htmlFor="attenuation_level">Attenuation level: </label>
            <input id="attenuation_level" name="attenuation_level" type="number" />
          </div>
          <div>
            <label htmlFor="contributed_by">Contributed by: </label>
            <input id="contributed_by" name="contributed_by" type="text" />
          </div>
          <div>
            <button type="submit">create new beer 🍺</button>
          </div>
        </form>
        {this.state.successMessage && <p>{ this.state.successMessage }</p> }
      </section>
    )
  }
}
