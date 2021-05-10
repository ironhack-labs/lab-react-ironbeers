import React, { Component } from 'react'
import SCNewBeerForm from './NewBeerForm.styled'
import BeersService from '../../services/beers.service'
import { Redirect } from 'react-router'

const validators = {
    name: (value) => {
        let message;
        if (!value) {
            message = 'Name is required';
        }
        return message;
    },
    tagline: (value) => {
        let message;
        if (!value) {
            message = 'Tagline is required';
        }
        return message;
    },
    description: (value) => {
        let message;
        if (!value) {
            message = 'Description is required';
        }
        return message;
    },
    first_brewed: (value) => {
        let message;
        if (!value) {
            message = 'Firstbrewed is required';
        }
        return message;
    },
    brewers_tips: (value) => {
        let message;
        if (!value) {
            message = 'Brewers tips is required';
        }
        return message;
    },
    attenuation_level: (value) => {
        let message;
        if (!value) {
            message = 'Attenuation Level is required'
        } else if (
            isNaN(value)
        ) {
            return message = 'Attenuation Level must be a number'
        }
        return message;
    },
    contributed_by: (value) => {
        let message;
        if (!value) {
            message = 'Contributed By is required'
        }
    }
}

export default class NewBeerForm extends Component {
    constructor(props) {
        super(props);
        this.beersService = new BeersService();
        this.state = {
            fields: {
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: 0,
                contributed_by: "",
            },
            errors: {
                name: null,
                tagline: null,
                descrptions: null,
                first_brewed: null,
                brewers_tips: null,
                attenuation_level: null,
                contributed_by: null,
            },
            redirect: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.beersService.createBeer(this.state.fields)
            .then(() => {
                this.setState({
                    fields: {
                        name: "",
                        tagline: "",
                        description: "",
                        first_brewed: "",
                        brewers_tips: "",
                        attenuation_level: "",
                        contributed_by: "",

                    },
                    errors: {
                        name: null,
                        tagline: null,
                        descrptions: null,
                        first_brewed: null,
                        brewers_tips: null,
                        attenuation_level: null,
                        contributed_by: null,
                    },
                    redirect: true
                })

            })
            .catch(err => console.error(err))
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value
            },
            errors: {
                ...this.state.errors,
                [name]: validators[name](value)
            }
        })
    }

    render() {
        const { fields, errors, redirect } = this.state;
        if (redirect) {
            return <Redirect to='/' />
        }
        return (
            <SCNewBeerForm onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={fields.name} onChange={(e) => this.handleChange(e)} required />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="name">Tagline</label>
                    <input type="text" name='tagline' value={fields.tagline} onChange={(e) => this.handleChange(e)} required />
                    {errors.tagline && <p className="error-message">{errors.tagline}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="name">Description</label>
                    <textarea name='description' value={fields.description} onChange={(e) => this.handleChange(e)} required></textarea>
                    {errors.description && <p className="error-message">{errors.description}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="name">First Brewed</label>
                    <input type="text" name='first_brewed' value={fields.first_brewed} onChange={(e) => this.handleChange(e)} required />
                    {errors.first_brewed && <p className="error-message">{errors.first_brewed}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="name">Brewers Tips</label>
                    <input type="text" name='brewers_tips' value={fields.brewers_tips} onChange={(e) => this.handleChange(e)} required />
                    {errors.brewers_tips && <p className="error-message">{errors.brewers_tips}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="name">Attenuation Level</label>
                    <input type="number" name='attenuation_level' value={fields.attenuation_level} onChange={(e) => this.handleChange(e)} required />
                    {errors.attenuation_level && <p className="error-message">{errors.attenuation_level}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="name">Contributed By</label>
                    <input type="text" name='contributed_by' value={fields.contributed_by} onChange={(e) => this.handleChange(e)} required />
                    {errors.contributed_by && <p className="error-message">{errors.contributed_by}</p>}
                </div>

                <button type="submit">
                    Add new
                </button>

            </SCNewBeerForm>
        )
    }
}
