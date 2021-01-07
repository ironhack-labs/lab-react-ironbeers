import axios from 'axios';
import React, { Component } from 'react';
import Header from '../../components/Header';
import './NewBeerPage.css';

export default class NewBeerPage extends Component {
        state = {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
        }
        handleChange = (event) => {
                const { name, value } = event.target;
                this.setState({ [name]: value })
        }

        handleSubmit = (event) => {
                event.preventDefault();
                axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { ...this.state })
                        .then(res => {
                                this.props.history.push("/beers")
                        })
                        .catch(err => console.log(err))
        }
        render() {
                return (
                        <div className='new-beer'>
                                <Header />
                                <h1>Add a new beer</h1>
                                <form onSubmit={this.handleSubmit}>
                                        <label htmlFor='name'>Name</label>
                                        <input type='text'
                                                name='name'
                                                id='name'
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                placeholder='name' />

                                        <label htmlFor='tagline'>Tagline</label>
                                        <input type='text'
                                                name='tagline'
                                                id='tagline'
                                                value={this.state.tagline}
                                                onChange={this.handleChange}
                                                placeholder='tagline' />

                                        <label htmlFor='description'>Description</label>
                                        <textarea type='text'
                                                rows='5'
                                                name='description'
                                                id='description'
                                                value={this.state.description}
                                                onChange={this.handleChange}
                                                placeholder='description' />

                                        <label htmlFor='first_brewed'>First brewed</label>
                                        <input type='text'
                                                name='first_brewed'
                                                id='first_brewed'
                                                value={this.state.first_brewed}
                                                onChange={this.handleChange}
                                                placeholder='first_brewed' />

                                        <label htmlFor='brewers_tips'>Brewers tips</label>
                                        <input type='text'
                                                name='brewers_tips'
                                                id='brewers_tips'
                                                value={this.state.brewers_tips}
                                                onChange={this.handleChange}
                                                placeholder='brewers_tips' />

                                        <label htmlFor='attenuation_level'>Attenuation level</label>
                                        <input type='number'
                                                name='attenuation_level'
                                                id='attenuation_level'
                                                value={this.state.attenuation_level}
                                                onChange={this.handleChange}
                                                placeholder='attenuation_level' />

                                        <label htmlFor='contributed_by'>Contributed by</label>
                                        <input type='text'
                                                name='contributed_by'
                                                id='contributed_by'
                                                value={this.state.contributed_by}
                                                onChange={this.handleChange}
                                                placeholder='contributed_by' />

                                        <button>Add</button>

                                </form>
                        </div>
                )
        }
}
