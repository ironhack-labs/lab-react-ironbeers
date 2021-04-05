import React, { Component } from 'react';
import { newBeer } from '../../services/BaseService';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './NewBeer.css'

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
        redirect: false
    }
    onChange = (e) => {
        const { name, value } = e.target
        
        this.setState({ [name]: value})
    }

    onSubmit = (e) => {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
        e.preventDefault()

        newBeer({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
            .then(() => {
            this.setState({redirect: true})
            })
            .catch((e) => console.error(e))
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, redirect } = this.state
        
        if (redirect) {
            return <Redirect to='/'></Redirect>
        }

        return (
            <div className="NewBeer">
                <Navbar/>

                <form className="container mt-3" onSubmit={this.onSubmit}>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.onChange} value={name}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="tagline" className="form-label">Tagline:</label>
                        <input type="text" className="form-control" id="tagline" name="tagline" onChange={this.onChange} value={tagline}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea className="form-control" id="description" name="description" rows="3" onChange={this.onChange} value={description}></textarea>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="first_brewed" className="form-label">First Brewed:</label>
                        <input type="text" className="form-control" id="first_brewed" name="first_brewed" onChange={this.onChange} value={first_brewed}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="brewers_tips" className="form-label">Brewers tips:</label>
                        <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" onChange={this.onChange} value={brewers_tips}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="attenuation_level" className="form-label">Attenuation level:</label>
                        <input type="number" className="form-control" id="attenuation_level" name="attenuation_level" onChange={this.onChange} value={attenuation_level}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="contributed_by" className="form-label">Contributed by:</label>
                        <input type="text" className="form-control" id="contributed_by" name="contributed_by" onChange={this.onChange} value={contributed_by}/>
                    </div>
                    <button type="submit" className="btn btn-info mb-5">ADD NEW</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;