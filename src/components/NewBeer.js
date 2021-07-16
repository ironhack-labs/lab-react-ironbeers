import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';



class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }



    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }



    handleFormSubmit = async (event) => {
        event.preventDefault(); //prevents that the page is realoded
        console.log(this.state);
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);
        console.log('checking now', response.data)
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
        });
    };






render() {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    return (
        <>
            <Navbar />
            <form onSubmit={this.handleFormSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={name} />
                <label>Tagline</label>
                <input type="text" name="tagline" onChange={this.handleChange} value={tagline} />
                <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange} value={description} />
                <label>First brewed</label>
                <input type="text" name="first_brewed" onChange={this.handleChange} value={first_brewed} />
                <label>Brewer tips</label>
                <input type="text" name="brewers_tips" onChange={this.handleChange} value={brewers_tips} />
                <label>Attenuation level</label>
                <input type="number" name="attenuation_level" onChange={this.handleChange} value={attenuation_level} />
                <label>Contributed by</label>
                <input type="text" name="contributed_by" onChange={this.handleChange} value={contributed_by} />
                <button type="submit">Create</button>
            </form>
        </>
    )
}
}

export default NewBeer;