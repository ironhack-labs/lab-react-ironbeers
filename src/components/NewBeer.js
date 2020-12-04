import React, { Component } from 'react'
import axios from 'axios'

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
        beerAdded: false
    }

    
    handleChange = event => {
        // console.log(event.target);
        const { name, value } = event.target
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        // console.log(name,value)
        this.setState({
          [name]: value
        })
        console.log(this.state) //its an object, a beautiful object!
        console.log(this.state.beerAdded)
      }


    
    handleSubmit = event => {
        const beerAdded = this.state.beerAdded

        event.preventDefault();

        this.setState({
            beerAdded : !this.state.beerAdded
          })
        // beerAdded = this.state.beerAdded
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
            name: this.state.name,
            tagline:  this.state.tagline,
            description:  this.state.description,
            first_brewed:  this.state.first_brewed,
            brewers_tips:  this.state.brewers_tips,
            attenuation_level:  this.state.attenuation_level,
            contributed_by:  this.state.contributed_by,
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        }, (error) => {
            console.log(error);
        })
    }
    
    // you should do a POST request to https://ih-beers-api2.herokuapp.com/beers/new, 
    // passing all the data on the body as an object. 
    // axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`)

    render() {
        const beerAdded = this.state.beerAdded
        if (beerAdded) return <> Beer successfully added! </>

        return (
            <div>

                <h1>Add a new beer</h1>

                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Name </label>
                            <input 
                                type = "text"
                                name = "name"
                                id = "name"
                                // value = {this.state.name}
                                onChange = {this.handleChange}
                            />
                    </p>
                    <p>
                    <label htmlFor="tagline">Tagline </label>
                        <input 
                            type = "text"
                            name = "tagline"
                            id = "tagline"
                            // value = {this.state.tagline}
                            onChange = {this.handleChange}
                        />  
                    </p>
                    <p>                          
                    <label htmlFor="description">Description </label>
                        {/* <textarea> */}
                        	<input 
                        	    type = "text"
                        	    name = "description"
                        	    id = "description"
                        	    cols="30" 
                        	    rows="10"
                        	    // value = {this.state.description}
                        	    onChange = {this.handleChange}
                        	/>
                        {/* </textarea> */}
                    </p>
                    <p>
                    <label htmlFor="first_brewed">First Brewed </label>
                        <input 
                            type = "text"
                            name = "first_brewed"
                            id = "first_brewed"
                            // value = {this.state.first_brewed}
                            onChange = {this.handleChange}
                        />
                    </p>
                    <p>
                    <label htmlFor="brewers_tips">Brewers Tips </label>
                        <input 
                            type = "text"
                            name = "brewers_tips"
                            id = "brewers_tips"
                            // value = {this.state.brewers_tips}
                            onChange = {this.handleChange}
                        />
                    </p>
                    <p>                                                                    
                    <label htmlFor="attenuation_level">Attenuation Level </label>
                        <input 
                            type = "number"
                            name = "attenuation_level"
                            id = "attenuation_level"
                            // value = {this.state.attenuation_level}
                            onChange = {this.handleChange}
                        />
                    </p>
                    <p>                       
                    <label htmlFor="contributed_by">Contributed By </label>
                        <input 
                            type = "text"
                            name = "contributed_by"
                            id = "contributed_by"
                            // value = {this.state.contributed_by}
                            onChange = {this.handleChange}
                        />
                    </p>
                    <button type='submit'>Add new</button>                
                </form>
            </div>
        )
    }
}
