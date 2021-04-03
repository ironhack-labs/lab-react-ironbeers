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
        firstBrewed: '',
        brewersTips: '',
        attenuation: 0,
        contributedBy: '',
        redirect: false
    }
    onChange = (e) => {
        const { name, value } = e.target
        
        this.setState({ [name]: value})
    }

    onSubmit = (e) => {
        const { name, tagline, description, firstBrewed, brewersTips, attenuation, contributedBy } = this.state
        e.preventDefault()

        newBeer({ name, tagline, description, firstBrewed, brewersTips, attenuation, contributedBy })
            .then(() => {
            this.setState({redirect: true})
            })
            .catch((e) => console.error(e))
    }

    render() {
        const { name, tagline, description, firstBrewed, brewersTips, attenuation, contributedBy, redirect } = this.state
        
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
                        <label htmlFor="firstBrewed" className="form-label">First Brewed:</label>
                        <input type="text" className="form-control" id="firstBrewed" name="firstBrewed" onChange={this.onChange} value={firstBrewed}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="brewersTips" className="form-label">Brewers tips:</label>
                        <input type="text" className="form-control" id="brewersTips" name="brewersTips" onChange={this.onChange} value={brewersTips}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="attenuation" className="form-label">Attenuation level:</label>
                        <input type="number" className="form-control" id="attenuation" name="attenuation" onChange={this.onChange} value={attenuation}/>
                    </div>
                    <div className="mb-3 form-newBeer">
                        <label htmlFor="contributedBy" className="form-label">Contributed by:</label>
                        <input type="text" className="form-control" id="contributedBy" name="contributedBy" onChange={this.onChange} value={contributedBy}/>
                    </div>
                    <button type="submit" className="btn btn-info mb-5">ADD NEW</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;