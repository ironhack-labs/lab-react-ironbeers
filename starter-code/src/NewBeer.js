import React, { Component } from 'react'
import Axios from 'axios'
import './NewBeer.css'

export default class NewBeer extends Component {

state = {
    name: ''
}

    setBeer = (e) => {
        this.setState=({
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.image_url]: e.target.value,
        })
    }

    sendBeerToApi = (e) => {
        e.preventDefault();
        Axios.post('https://ih-beers-api.herokuapp.com/beers/new', {name: this.state.name, description: this.state.description, image_url: this.state.image_url}).then(
            res=>{
                console.log(res)
            }
        )
    }

    render() {
        return (
            <div>
              
                <form className='addBeer' onSubmit={this.sendBeerToApi}>  
                <h1>Add New Beer</h1>
                    <input className='inputfield' type='text' placeholder=' Name' name='name' onChange={this.setBeer}></input>
                    <input className='inputfield' type='text'  placeholder=' Description' name='description' onChange={this.setBeer}></input>
                    <input className='inputfield' type='text'  placeholder=' Image url' name='image_url' onChange={this.setBeer}></input>
                    <input className='submit' type='submit' value='add'></input>
                </form>
            </div>
        )
    }
}
