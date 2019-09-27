import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

export default class NewBeer extends Component {

    state = {
        beer: {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        },
        response: undefined
    }

    addNewBeer = async e => {
        e.preventDefault()
        const { beer } = this.state
        const response = await axios.post('https://ih-beer-api.herokuapp.com/beers/new', beer)
        this.setState({
            beer: {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: '',
                contributed_by: ''
            },
            response: response.data.message
        })
    }

    handleInput = e => {
        this.setState({
            beer: {
                ...this.state.beer,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const { beer, response } = this.state
        return (
            <>
            <Navbar adonde={'/'} />
            <div className="columns is-mobile">
                <div className="column">
                    {response && <p>{response}</p>}
                    <form className="box" onSubmit={this.addNewBeer}>
                    <h1 className="title is-3">New beer</h1>

                        <div className="field">
                            <label className="label">Name:</label>
                            <input className="input"
                                required
                                onChange={this.handleInput}
                                value={beer.name}
                                type='text'
                                name='name'
                            />
                        </div>
                        <div className="field">
                        <label className="label">Tagline:</label>
                            <input className="input"
                                required
                                value={beer.tagline}
                                onChange={this.handleInput}
                                type='text'
                                name='tagline'
                            />
                        </div>
                        <div className="field">
                        <label className="label">Description:</label>
                            <textarea className="textarea"
                                required
                                value={beer.description}
                                onChange={this.handleInput}
                                type='text'
                                name='description'
                            ></textarea>
                        </div>
                        <div className="field">
                        <label className="label">First brewed:</label>
                            <input className="input"
                                required
                                value={beer.first_brewed}
                                onChange={this.handleInput}
                                type='text'
                                name='first_brewed'
                            />
                        </div>
                        <div className="field">
                        <label className="label">Brewers tips:</label>
                            <input className="input"
                                required
                                value={beer.brewers_tips}
                                onChange={this.handleInput}
                                type='text'
                                name='brewers_tips'
                            />
                        </div>
                        <div className="field">
                        <label className="label">Attenuation level:</label>
                            <input className="input"
                                required
                                value={beer.attenuation_level}
                                onChange={this.handleInput}
                                type='number'
                                name='attenuation_level'
                            />
                        </div>
                        <div className="field">
                        <label className="label">Contributed by:</label>
                            <input className="input"
                                required
                                value={beer.contributed_by}
                                onChange={this.handleInput}
                                type='text'
                                name='contributed_by'
                            />
                        </div>
                        <div className="field">
                            <button className="button is-fullwidth is-info" type='submit'>Add new</button>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
}