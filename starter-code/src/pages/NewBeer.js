import React, { Component } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'

export default class NewBeer extends Component {
    state={style:{
        backgroundColor:'dodgerblue'
    },
    button:'Create'
    }
    //for each input, create a state property matching the input-name and give it the value of the input-value
    getSet = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //axios post to create new beer with API
    post = () => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then(response=>{
            //change button color and text depending on success or failure to create new beer
            if (response.status === 200) {
                this.setState({
                    button:'Success!',
                    style:{
                        backgroundColor:'green'
                    }
                })
            } else {
                this.setState({
                    button:"Failed",
                    style:{
                        backgroundColor:'red'
                    }
                })
            }
        })
        .catch(err=>{
            this.setState({
                    button:'Error',
                    style:{
                        backgroundColor:'red'
                    }
                })
            console.log(err)})
    }

    render() {
        return (
            <div>
            <Nav/>
            <div className='newbeer'>
                <input name='name' type="text" onChange={this.getSet} placeholder='Name'/>
                <input name='tagline' type="text" onChange={this.getSet} placeholder='Tagline'/>
                <input name='description' type="text" onChange={this.getSet} placeholder='Description'/>
                <input name='first_brewed' type="text" onChange={this.getSet} placeholder='First Brewed'/>
                <input name='brewers_tips' type="text" onChange={this.getSet} placeholder='Brewers Tips'/>
                <input name='attenuation_level' type="number" onChange={this.getSet} placeholder='Attenuation Level (number)'/>
                <input name='contributed_by' type="text" onChange={this.getSet} placeholder='Contributed By'/>
                <button style={this.state.style} onClick={this.post}>{this.state.button}</button>
            </div>
            </div>
        )
    }
}
