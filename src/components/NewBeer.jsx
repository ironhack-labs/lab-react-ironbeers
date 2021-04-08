import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../assets/css/NewBeer.css'
import { createBeer } from '../service/BaseService';

class NewBeer extends Component {

    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        description: '',
        contributed_by: '',
        redirect: false
    }

    onChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        const { name, tagline, first_brewed, attenuation_level, brewers_tips, description, contributed_by } = this.state
        e.preventDefault()

        createBeer({ name, tagline, first_brewed, attenuation_level, brewers_tips, description, contributed_by })
            .then(() => {
                this.setState({ redirect: true })
            })
    }

    render() {
        const { name, tagline, first_brewed, attenuation_level, brewers_tips, description, contributed_by, redirect } = this.state

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="container mt-3">
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tagline" className="form-label">Tagline</label>
                        <input type="text" className="form-control" id="tagline" name="tagline" value={tagline} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name="description" style={{ height: "110px" }} value={description} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="first_brewed" className="form-label">First brewed</label>
                        <input type="text" className="form-control" id="first_brewed" name="first_brewed" value={first_brewed} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="brewers_tips " className="form-label">Brewers Tips </label>
                        <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" value={brewers_tips} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="attenuation_level " className="form-label">Attenuation level</label>
                        <input type="number" className="form-control" id="attenuation_level" name="attenuation_level" value={attenuation_level} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contributed_by" className="form-label">Contributed by</label>
                        <input type="text" className="form-control" id="contributed_by" name="contributed_by" value={contributed_by} onChange={this.onChange} />
                    </div>
                    <div className="text-center">
                        <button className="btn-new" type="submit">ADD NEW</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewBeer;