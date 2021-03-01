import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class New extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
        error: null
      }

      handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        if (value.length < 1) {
          this.setState({
            error: 'String can not be empty'
          })
        } else {
          this.setState({
            [name]: value
          })
        }
      }

      handleSubmit = event => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
          .then((response) => {
            console.log(response)
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: '',
                contributed_by: ''
            })
            //this.props.getData();
          })
      }


    render() {
        return (
            <div className="App">
            <Link to='/'>
                  Home
            </Link>
            <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              type="text"
              id="first_brewed"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
            />
             <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
              type="text"
              id="brewers_tips"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
            />
             <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              type="text"
              id="attenuation_level"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
             <label htmlFor="contributed_by">Contributed By</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
            <button type="submit">ADD NEW</button>
          </form>
          </div>
          </div>
        )
      }
    }
    

export default New;