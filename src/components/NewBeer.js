import React, { Component } from 'react'
//import Header from './header/Header';
import axios from "axios"



export default class NewBeer extends Component {
   
    state = {
       image: '',
       name: '',
       tagline: '',
       attenuation_level: 0,
       first_brewed: '',
       description: '',
       contributed_by: '',
       brewers_tips: '' 
    }

    onChangeHandler = e => {
        let {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{image: this.state.image,
        name: this.state.name,
        tagline:this.state.tagline,
        attenuation_level: this.state.attenuation_level,
        first_brewed: this.state.first_brewed,
        description: this.state.description,
        contributed_by: this.state.contributed_by,
        brewers_tips: this.state.brewers_tips})
        .then(response => {
            console.log(response)
        })
        .catch(e => console.log(e))
    }

    
   
   
   
    render() {
        return (
            <div>
              
            <h1>New Beer</h1>  

            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' value={this.state.name} placeholder='name' onChange={this.onChangeHandler}/>
                <input type='text' name='image' value ={this.state.image} placeholder='image' onChange={this.onChangeHandler}/>
                <input type='text' name='tagline' value={this.state.tagline} placeholder='tagline' onChange={this.onChangeHandler}/>
                <input type='text' name='first_brewed' value={this.state.first_brewed} placeholder='first_brewed' onChange={this.onChangeHandler}/>
                <input type='number' name='attenuation_level' value={this.state.attenuation_level} placeholder='attenuation_level' onChange={this.onChangeHandler}/>
                <input type='text' name='description' value={this.state.description} placeholder='description' onChange={this.onChangeHandler}/>
                <input type='text' name='contributed_by' value={this.state.contributed_by} placeholder='contributed_by' onChange={this.onChangeHandler}/>
                <input type='text' name='brewers_tips' value={this.state.brewers_tips} placeholder='brewers_tips' onChange={this.onChangeHandler}/>
                <input type='submit'/>
            </form>
            </div>
        )
    }
}












