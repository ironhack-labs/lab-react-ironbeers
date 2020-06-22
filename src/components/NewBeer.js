import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';


class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    }

    changeHandler = (event) => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
    };

    formSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then((newBeer) => {
                console.log(newBeer)
                this.props.addBeer(newBeer);

                this.setState({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: '',
                    contributed_by: ''
                });
            })
    };

    render(){
        return(
            <div>
                <Header />
                <form onSubmit={this.formSubmitHandler}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                    <label>Tagline</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={this.changeHandler} />
                    <label>Description</label>
                    <textarea type="text" name="description" value={this.state.description} onChange={this.changeHandler} />
                    <label>First Brewed</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.changeHandler} />
                    <label>Brewers Tips</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.changeHandler} />
                    <label>Attenuation Level</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.changeHandler} />
                    <label>Contributed By</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.changeHandler} />

                    <input type="submit" value="ADD NEW" />
                </form>
            </div>
        )
    }
}

export default NewBeer;