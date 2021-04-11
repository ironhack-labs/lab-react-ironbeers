import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { createBeer } from '../services/BaseSevices';
import Header from './Header';
class NewBeer extends Component {

    state = {

        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    }
    
   
    onSubmit = e => {
        e.preventDefault()
    createBeer({...this.state})
    .then(() => {
      this.props.history.push('/beers');
    } )
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    render() {

        return (


            <div className="Newbeer">
                <Header />

                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name: </label>

                        <input
                            id="name" name="name" onChange={this.onChange} value={this.value} placeholder="Name">
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tagline" className="form-label">Tag line: </label>
                        <input
                            id="tagline" name="tagline" onChange={this.onChange} value={this.value} placeholder="Tagline">
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description: </label>
                        <input
                            id="description" name="description" onChange={this.onChange} value={this.value} placeholder="Description">
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="first_brewed" className="form-label">First brewed: </label>
                        <input
                            id="first_brewed" name="first_brewed" onChange={this.onChange} value={this.value} placeholder="First_brewed">
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="brewers_tips" className="form-label">Brewers tips</label>
                        <input
                            id="brewers_tips" name="brewers_tips" onChange={this.onChange} value={this.value} placeholder="Brewers_tips">
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="attenuation_level" className="form-label">Attenuation level: </label>
                        <input
                            id="attenuation_level" name="attenuation_level" onChange={this.onChange} value={this.value} placeholder="Attenuation_level"
                            type="number" min={0}>

                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contributed_by" className="form-label">Brewers tips</label>
                        <input
                            id="contributed_by" name="contributed_by" onChange={this.onChange} value={this.value} placeholder="Contributed_by">
                        </input>
                    </div>

                    <button type="btn btn-primary">Submit</button>
                </form>



            </div>



        )

    }
}

export default NewBeer;