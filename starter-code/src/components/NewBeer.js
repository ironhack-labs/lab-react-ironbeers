import React, { Component } from 'react'
import axios from 'axios'

export default class NewBeer extends Component {


state = {
    name: '',
    tagline: '',
    description: '',
    firstbrewed: '',
    attlevel: 0,
    contribby: ''
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })



    
}

handleSubmit = event => {
    event.preventDefault();

    const newBeer = {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        firstbrewed: this.state.firstbrewed,
        attlevel: this.state.attlevel,
        contribby: this.state.contribby
    }


    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then(response => {
        console.log(response);
        this.props.history.push('/')
})
.catch(err => {
console.log(err);
})
}





    render() {
        return (
            <div>
                <div>
               <form action='https://ih-beers-api2.herokuapp.com/beers/new' method="POST" >

<label htmlFor="name">Name</label>
<input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChange}/>

<label htmlFor="tagline">Tagline</label>
<input type="text" name='tagline' id='tagline' value={this.state.tagline} onChange={this.handleChange}/>

<label htmlFor="description">Description</label>
<input type="text" name='description' id='description' value={this.state.description} onChange={this.handleChange}/>

<label htmlFor="firstbrewed">First Brewed</label>
<input type="text" name='firstbrewed' id='firstbrewed' value={this.state.firstbrewed} onChange={this.handleChange}/>

<label htmlFor="attlevel">Attenuation Level</label>
<input type="number" name='attlevel' id='attlevel' value={this.state.attlevel} onChange={this.handleChange}/>

<label htmlFor="contribby">Contributed By</label>
<input type="text" name='contribby' id='contribby' value={this.state.contribby} onChange={this.handleChange}/>
<button type="submit">Add new</button>
               </form>
               </div>
            </div>
        )
    }
}
