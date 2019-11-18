import React, { Component } from 'react'
import Header from './Header.js';
import Axios from 'axios';
import './App.css';

export class NewBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
        name:'',
        tagline:'',
        description:'',
        firstbrewed:'',
        brewertips:'',
        attenuation:0,
        contributed:''
            }  
        }

    setBeer = (e) => {
            this.setState({
                [e.target.name]:e.target.value,
                [e.target.tagline]:e.target.value,
                [e.target.description]:e.target.value,
                [e.target.first_brewed]:e.target.value,
                [e.target.brewer_tips]:e.target.value,
                [e.target.attenuation_level]:e.target.value,
                [e.target.contributed_by]:e.target.value
            })
        }

        sendBeerToApi = (e) => {
            e.preventDefault();
            Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', 
            {name:this.state.name,
                tagline:this.state.tagline,
                description:this.state.description,
                firstbrewed:this.state.first_brewed,
                brewertips:this.state.brewers_tips,
                attenuation:this.state.attenuation_level,
                contributed:this.state.contributed_by}

            )
                .then(res=>{
                    console.log(res)
                })
        }
    
    render() {

     
        return (
            <>
             <Header/>
             <form onSubmit={this.sendBeerToApi}>
             <label>Name:
                 <input type="text" name="name" onChange={this.setBeer}></input>
                 </label>
                 <label>Tagline:
                 <input type="text" name="tagline" onChange={this.setBeer}></input>
                 </label>
                 <label>Description:
                 <textarea type="text" name="description" onChange={this.setBeer}></textarea>
                 </label>
                 <label>First Brewed:
                 <input type="text" name="firstbrewed" onChange={this.setBeer}></input>
                 </label>
                 <label>Brewers Tips:
                 <input type="text" name="brewertips" onChange={this.setBeer}></input>
                 </label>
                 <label>Attenuation Level:
                 <input type="text" name="attenuation" onChange={this.setBeer}></input>
                 </label>
                 <label>Contributed By:
                 <input type="text" name="contributed" onChange={this.setBeer}></input>
                 </label>
                 <input className="submit-btn" type="submit" value="ADD NEW"></input>
             </form>
            </>
        )
    }
}

export default NewBeer
