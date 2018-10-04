import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

 
export default class NewBeer extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            tagline: "",
            description: ""
        }
    }

    // getAllBeers = () => {
        
    // }
    


    handleFormSubmit = (event) =>{
        event.preventDefault();
        const {name, tagline, description} = this.state
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", name, tagline, description )
        .then( ()  => {
            this.setState({name:"", tagline:"", description:""})
        })
        .catch( () => {console.log("wrong")})
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            
            <div>
                <Header/>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange(e)}/>
                    <label>Tagline:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={e=> this.handleChange(e)}/>
                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={e=> this.handleChange(e)}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
    

}

