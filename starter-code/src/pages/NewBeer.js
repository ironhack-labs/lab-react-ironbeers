import React, { Component } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'

export default class NewBeer extends Component {
    state={success:false}
    getSet = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    post = () => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name:this.state.name,
            tagline:this.state.tagline,
            description:this.state.description,
            first_brewed:this.state.first_brewed,
            brewers_tips:this.state.brewers_tips,
            attenuation_level:this.state.attenuation_level,
            contributed_by:this.state.contributed_by,
            tagline:this.state.tagline
        })
        .then(response=>{
            console.log(response.status)
            if (response.status === 200) {
                this.setState({
                    success:true
                })
            }
        })
        .catch(err=>console.log(err))
    }

    render() {
        let success
        if (this.state.success){
            success = <h2>Beer Creation Success!</h2>
        }
        return (
            <div>
            <Nav/>
            <div className='newbeer'>
                <input name='name' type="text" required onChange={this.getSet} placeholder='Name'/>
                <input name='tagline' type="text" onChange={this.getSet} placeholder='Tagline'/>
                <input name='description' type="text" onChange={this.getSet} placeholder='Description'/>
                <input name='first_brewed' type="text" onChange={this.getSet} placeholder='First Brewed'/>
                <input name='brewers_tips' type="text" onChange={this.getSet} placeholder='Brewers Tips'/>
                <input name='attenuation_level' type="number" onChange={this.getSet} placeholder='Attenuation Level (number)'/>
                <input name='contributed_by' type="text" required onChange={this.getSet} placeholder='Contributed By'/>
                <button onClick={this.post}>Create</button>
                {success}
            </div>
            </div>
        )
    }
}
