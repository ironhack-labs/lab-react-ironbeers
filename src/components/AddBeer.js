import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AddBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }


    handleChange(event) {
        let { name, value } = event.target;

        this.setState({ [name]: value });
    }


    // When you have built the form, you should do a POST request to https://ih-beers-api2.herokuapp.com/beers/new


    handleFormSubmit = (event) => {
        event.preventDefault();

        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', {
          name: this.state.name,
          tagline: this.state.tagline,
          descritpion: this.state.description,
          first_brewed: this.state.first_brewed,
          brewer_tips: this.state.brewer_tips,
          attenuation_level: this.state.attenuation_level,
          contributed_by: this.state.contributed_by,
        })
        .then((apiResponse) => {
          this.props.history.push('/beers');
          console.log("Done !");
          console.log(apiResponse);
        });
    };





    //     let newBeer = {
    //         name: this.state.name,
    //         tagline: this.state.tagline,
    //         description: this.state.description,
    //         first_brewed: this.state.first_brewed,
    //         brewers_tips: this.state.brewers_tips,        
    //         attenuation_level: this.state.attenuation_level,
    //         contributed_by: this.state.contributed_by
    //     }

    //     this.props.addBeer(newBeer)

    //     this.setState({
    //         name: '',
    //         tagline: '',
    //         description: '',
    //         first_brewed: '',
    //         brewers_tips: '',
    //         attenuation_level: 0,
    //         contributed_by: ''
    //     })
    // }

   

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Tagline:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />

                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />

                    <label>First brewed:</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />

                    <label>Description:</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />

                    <label>Attenuation level:</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />

                    <label>Contributed by:</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AddBeer);