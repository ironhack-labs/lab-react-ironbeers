import React from 'react';
import axios from 'axios';
import Navbar from './NavBar';

class NewBeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    };

    handleChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.currentTarget.value
        })
    }

    submitHandler = (event) => {

        event.preventDefault();

        const newBeer = { ...this.state};

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then(resp => {
            this.props.history.push("/beers")
            console.log(resp);
        })
    }

    render() {

        return (
            <div>
                <Navbar />
                <div>
                    <h2>Add a new beer</h2>
                    <form>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChangeInput}></input>
                        <input type="text" name="tagline" placeholder="Tagline" value={this.state.tagline} onChange={this.handleChangeInput}></input>
                        <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeInput}></input>
                        <input type="text" name="first_brewed" placeholder="First brewed" value={this.state.first_brewed} onChange={this.handleChangeInput}></input>
                        <input type="text" name="brewers_tips" placeholder="Brewers tips" value={this.state.brewers_tips} onChange={this.handleChangeInput}></input>
                        <label htmlFor="attenuation_level">Attenuation level</label>
                        <input type="number" name="attenuation_level" id="attenuation-level" value={this.state.attenuation_level} onChange={this.handleChangeInput}></input>
                        <input type="text" name="contributed_by" placeholder="Contributed by" value={this.state.contributed_by} onChange={this.handleChangeInput}></input>
                        <button onClick={this.submitHandler}>Save New Beer</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewBeer;