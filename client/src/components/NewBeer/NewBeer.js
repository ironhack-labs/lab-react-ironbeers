import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { StyledForm, StyledInput, StyledTA, StyledButton } from './NewBeer.styled'

export default class NewBeer extends Component {

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

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
        axios.post('https://ironbeer-api.herokuapp.com/beers/new', body)
            .then(() => this.setState({
                ...this.state,
                redirect: true
            }))
    }

  render() {
    if (this.state.redirect) return <Redirect to='/'/>
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label>Name</label><StyledInput onChange={ e => this.handleChange(e)} name="name" type="text"/>
        <label>Tagline</label><StyledInput onChange={ e => this.handleChange(e)} name="tagline" type="text"/>
        <label>Description</label><StyledTA onChange={ e => this.handleChange(e)} name="description" cols="30" rows="10"/>
        <label>First Brewed</label><StyledInput onChange={ e => this.handleChange(e)} name="first_brewed" type="text"/>
        <label>Brewers Tips</label><StyledInput onChange={ e => this.handleChange(e)} name="brewers_tips" type="text"/>
        <label>Attenuation Level</label><StyledInput onChange={ e => this.handleChange(e)} name="attenuation_level" type="number"/>
        <label>Contributed By</label><StyledInput onChange={ e => this.handleChange(e)} name="contributed_by" type="text"/>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    )
  }
}
