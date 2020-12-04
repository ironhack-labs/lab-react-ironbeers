import React, { Component } from 'react'
import axios from 'axios'
import './NewBeer.css';

export default class NewBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
      }
      

      handleSubmit = event => {
        event.preventDefault();
        //   console.log(event);
        const beer = {
          name: this.state.name,
          tagline: this.state.tagline,
          description: this.state.description,
          first_brewed: this.state.first_brewed,
          brewer_tips: this.state.brewer_tips,
          attenuation_level: this.state.attenuation_level,
          contributed_by: this.state.contributed_by
        }
        // console.log(beer)
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, beer )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => console.log(err))
    }
        handleChange = event => {
            // console.log( event.target.name, event.target.value )
            this.setState({ [event.target.name]: event.target.value });
          }
    

    render() {
        return (
            <div className="beer-form">
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Beer Name</label>
                <input type="text" name="name" onChange={this.handleChange}/>

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" onChange={this.handleChange}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={this.handleChange}/>
                
                <label htmlFor="first_brewed">First brewed</label>
                <input type="text" name="first_brewed" onChange={this.handleChange}/>
                
                <label htmlFor="brewer_tips">Brewer tips</label>
                <input type="text" name="brewer_tips" onChange={this.handleChange}/>
                
                <label htmlFor="attenuation_level">Attenuation level</label>
                <input type="number" name="attenuation_level" onChange={this.handleChange}/>
                
                <label htmlFor="contributed_by">Created by</label>
                <input type="text" name="contributed_by" onChange={this.handleChange}/>
                
                <button type="submit">Create!</button>
                </form>
            </div>
        )
    }
}
