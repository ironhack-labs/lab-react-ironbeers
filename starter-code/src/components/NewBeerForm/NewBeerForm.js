import React, { Component } from 'react';
import FormInput from './../FormInput/FormInput';
import Textarea from './../Textarea/Textarea';

import './NewBeerForm.css'

export default class NewBeerForm extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    };


    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={e => this.props.onSubmit(e, this.state)} className="NewBeerForm">
                <h1>Forms</h1>

                <FormInput type="text" name="name" title="Name" onChange={this.handleChange} />
                <FormInput type="text" name="tagline" title="Tagline" onChange={this.handleChange} />
                <Textarea name="description" title="description" onChange={this.handleChange} />
                <FormInput type="text" name="first_brewed" title="First Brewed" onChange={this.handleChange} />
                <FormInput type="text" name="brewers_tips" title="Brewers Tips" onChange={this.handleChange} />
                <FormInput type="number" name="attenuation_level" title="Attenuation Level" onChange={this.handleChange} />
                <FormInput type="text" name="contributed_by" title="Contributed By" onChange={this.handleChange} />

                <button type="submit">Add New</button>
            </form>
        )
    }
}