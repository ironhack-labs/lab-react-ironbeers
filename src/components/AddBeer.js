import React, { Component } from 'react';
import HomeLink from './HomeLink';
import axios from 'axios'



class AddBeer extends Component{
    state={
        
    }   
    
    submitBeer = (event)=>{
        let axios = require('axios')
        let newBeer={
            name: this.state.name,
            tagline: this.state.tag,
            description: this.state.description,
            first_brewed: this.state.firstBrewed,
            brewers_tips: this.state.brewerTips,
            attenuation_level: this.state.attenuation,
            contributed_by: this.state.contributed
        }
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(function (response) {
                console.log(response);
            })
    }//end submitBeer
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }//end handleChange

    displayForm =()=>{
        return(
            <form onSubmit={()=>this.submitBeer()}>
                <label >Name: </label>
                <input onChange={this.handleChange} type='text' name='name'/>
                <br />
                <label >Tagline: </label>
                <input onChange={this.handleChange} type='text' name='tag'/>
                <br />
                <label >Description: </label>
                <textarea onChange={this.handleChange} name='description'/>
                <br />
                <label >First Brewed: </label>
                <input onChange={this.handleChange} type='text' name='firstBrewed'/>
                <br />
                <label >Brewers Tips: </label>
                <input onChange={this.handleChange} type='text' name='brewerTips'/>
                <br />
                <label >Attentuation Level: </label>
                <input onChange={this.handleChange} type='number' name='attenuation'/>
                <br />
                <label >Contributed By: </label>
                <input onChange={this.handleChange} type='text' name='contributed'/>
                <br />
                <input onChange={this.handleChange} type="submit" />
            </form>
        )
    }//end displayForm
    
    render(){
        return (
            <div>
                <HomeLink />
                {this.displayForm()}
            </div>
        );
    }
}

export default AddBeer;