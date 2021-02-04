import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'

class NewBeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = (e) => {
        const propertyName = e.target.name
        this.setState({
            [propertyName]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const propertyName = e.target.name

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewer_tips: this.state.brewer_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
          })
          .then( response => {
            console.log(response);
          })
          .catch( error => {
            console.log(error);
          });

        // console.log(e)
    }

    render(){
    return (
        <div>
            <Navbar />
            <h1>New Beer</h1>
            <div >
            <form onSubmit={this.handleFormSubmit} className='container'>
                <label>Name</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>

                <label>Tagline</label>
                <input type='text' name='tagline' value={this.state.tagline} onChange={this.handleChange}/>

                <label>Description</label>
                <textarea type='text' name="description" rows="10" cols="30" value={this.state.description} onChange={this.handleChange} />

                <label>First Brewed</label>
                <input type='text' name='first_brewed' value={this.state.first_brewed} onChange={this.handleChange}/>

                <label>Brewer Tips</label>
                <input type='text' name='brewer_tips' value={this.state.brewer_tips} onChange={this.handleChange}/>

                <label>Attenuation Level</label>
                <input type='number' name='attenuation_level' value={this.state.attenuation_level} onChange={this.handleChange}/>

                <label>Contributed By</label>
                <input type='text' name='contributed_by' value={this.state.contributed_by} onChange={this.handleChange}/>

                <button type='submit'>Add new beer</button>
            </form>
            </div>

        </div>
    )
    }
}

export default NewBeer
