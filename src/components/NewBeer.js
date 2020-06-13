import React from 'react';
import Header from './Header.js';
import axios from 'axios'


class NewBeer extends React.Component {

    state = {
        name: "",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:0,
        contributed_by:""
    }

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
      }
     

handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((response) => {
            this.props.history.push("/beers")
        })
      }   


  render() {
      console.log(this.props)
    return (
      <div>
        <Header></Header>
        <h1>New Beer</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>

          <div>
            <label for="tagline">Tagline:</label>
            <input type="text" id="tagline" name="tagline" value={this.state.tagline}  onChange={this.handleChange} />
          </div>
          <div>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
          </div>
          <div>
            <label for="first_brewed">First brewed:</label>
            <input type="text" id="first_brewed" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
          </div>
          <div>
            <label for="brewers_tips">Brewers tips:</label>
            <input type="text" id="brewers_tips" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />
          </div>

          <div>
            <label for="attenuation_level">Attenuation level:</label>
            <input
              type="number"
              id="attenuation_level"
              name="attenuation_level"
              value={this.state.attenuation_level} onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="contributed_by">Contributed by:</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBeer;
