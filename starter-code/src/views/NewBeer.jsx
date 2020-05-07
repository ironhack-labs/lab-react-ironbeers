import React from 'react'
import axios from 'axios';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewer_tips: '',
    attenuation_level: '',
    contributed_by: '',
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
      })
      .then(apiResponse => {
        console.log(apiResponse)
        this.props.history.push("/");
      })
      .catch(apiError => {
        console.error(apiError);
      });
  }

  render() {
    return (
      <div>
        <h1>Add a new cool beer to the list!</h1>
        <form
          className="form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" />

          <label htmlFor="description">Description</label>
          <textarea type="text" name="description"></textarea>

          <label htmlFor="first-brewed">First Brewed</label>
          <input type="text" name="first_brewed" />

          <label htmlFor="brewers_tips">Brewers tips</label>
          <input type="text" name="brewers_tips" />

          <label htmlFor="attenuation_level">Attenuation level</label>
          <input type="number" name="attenuation_level" />

          <label htmlFor="contributed_by">Contributed by</label>
          <input type="text" name="contributed_by" />

          <button type="submit" className="btn-create">CREATE</button>
        </form>
      </div>
    )
  }
}

export default NewBeer;
