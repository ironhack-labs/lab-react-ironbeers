import React from 'react';
import axios from 'axios';
import NavBar from './NavBar'

class NewBeer extends React.Component {

    state = {
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:"",
        contributed_by:"",
    };

    handleChange = (event) => {
        const key = event.target.name;
        this.setState({[key]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Your beer is saved!")

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name:this.state.name,
            tagline:this.state.tagline,
            description:this.state.description,
            first_brewed:this.state.first_brewed,
            brewers_tips:this.state.brewers_tips,
            attenuation_level:this.state.attenuation_level,
            contributed_by:this.state.contributed_by,
        })
        .then((response) => {
            console.log(this.props.history)
            this.props.history.push("/beers");
        });
    }

    render(){
    return (
        <div>
            
        <NavBar></NavBar>

        <form method="" onSubmit={this.handleSubmit}>

            <label htmlFor="name">Name</label>
            <input
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text"
            />

            <label htmlFor="name">Tagline</label>
            <input
            id="tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
            name="tagline"
            type="text"
            />

            <label htmlFor="description">Description</label>
            <input
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            type="text"
            />

            <label htmlFor="first_brewed">First Brewed</label>
            <input
            id="first_brewed"
            onChange={this.handleChange}
            value={this.state.first_brewed}
            name="first_brewed"
            type="text"
            />

            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
            id="brewers_tips"
            onChange={this.handleChange}
            value={this.state.brewers_tips}
            name="brewers_tips"
            type="text"
            />  

            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
            id="attenuation_level"
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            name="attenuation_level"
            type="number"
            />

            <label htmlFor="contributed_by">Contributed By</label>
            <input
            id="contributed_by"
            onChange={this.handleChange}
            value={this.state.contributed_by}
            name="contributed_by"
            type="text"
            />

            <button>ADD NEW</button>

        </form>

        </div>
    )
    }
}

export default NewBeer
