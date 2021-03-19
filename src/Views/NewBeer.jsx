import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {

        const {name, tagline, description,first_brewed,brewers_tips,attenuation_level,contributed_by} = this.state;

        return (
            <div className="NewBeer">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={this.handleChange}
                        value={name}
                        placeholder="Bipbopboom"
                        type="text" 
                        name="name" 
                        id="name"
                    />

                    <label htmlFor="tagline">Tagline</label>
                    <input 
                        onChange={this.handleChange}
                        value={tagline}
                        placeholder="This is BOMB"
                        type="text" 
                        name="tagline" 
                        id="tagline"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea 
                        onChange={this.handleChange}
                        value={description}
                        placeholder="Did you taste this beer? It's heaven!"
                        type="textarea" 
                        name="description" 
                        id="description"
                    >   
                    </textarea>  

                    <label htmlFor="first_brewed">First Brewed</label>
                    <input 
                        onChange={this.handleChange}
                        value={first_brewed}
                        placeholder="500 before JC"
                        type="text" 
                        name="first_brewed" 
                        id="first_brewed"
                    />

                    <label htmlFor="brewers_tips">Brewers tips</label>
                    <input 
                        onChange={this.handleChange}
                        value={brewers_tips}
                        placeholder="DRINK IT"
                        type="text" 
                        name="brewers_tips" 
                        id="brewers_tips"
                    />

                    <label htmlFor="attenuation_level">Attenuation level</label>
                    <input 
                        onChange={this.handleChange}
                        value={attenuation_level}
                        placeholder="What's that??!"
                        type="number" 
                        name="attenuation_level" 
                        id="attenuation_level"
                    />

                    <label htmlFor="contributed_by">Created by</label>
                    <input 
                        onChange={this.handleChange}
                        value={contributed_by}
                        placeholder="MICHKA DES RONRONS CELESTES ❤️"
                        type="text" 
                        name="contributed_by" 
                        id="contributed_by"
                    />

                    <button>LET'S GO!</button>

                </form>
            </div>
        )
    }
}

export default NewBeer
