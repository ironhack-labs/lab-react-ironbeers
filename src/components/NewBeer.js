import React, { Component } from 'react'
import axios from 'axios'


export default class NewBeer extends Component {
    state = {
        name: '', 
        tagline: '',
        description: '', 
        first_brewed: '',
        brewers_tips: '', 
        attenuation_level: 0, 
        contributed_by: ''
    }

    changeHandler = (e) => {
        let { name, value } = e.target;
        this.setState({[name]: value})
    }

/*     componentDidMount = (e) => {
        e.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name: this.state.name})
    } */

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",
         {
             name: this.state.name, 
             tagline: this.state.tagline
         }
         )
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
       
        
        return (
            <div>
                <form method='post'>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => this.changeHandler(e)} type="text" name="name"/>
                    <hr/>
                    <label htmlFor="tagline">Tagline</label>
                    <input onChange={(e) => this.changeHandler(e)} type="text" name='tagline'/>
                    <hr/>
                    <button onClick={(e) => this.submitHandler(e)} type="submit">Add a new beer!</button>
                </form>
            </div>
        )
    }
}
