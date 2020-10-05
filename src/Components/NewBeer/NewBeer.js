import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './NewBeer.css'

    class NewBeer extends React.Component {
        state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: null,
            contributed_by: '',
            image_url:''
        }

 
 
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

 
        handleSubmit(e) {
            e.preventDefault()
            axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
                name: this.state.name,
                tagline: this.state.tagline,
                description: this.state.description,
                first_brewed: this.state.first_brewed,
                brewers_tips: this.state.brewers_tips,
                attenuation_level: this.state.attenuation_level,
                contributed_by: this.state.contributed_by,
                image_url:this.state.image_url
            })
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: null,
                contributed_by: '',
                image_url:''
            })
        }

        render() {
            return (
                <div>
                    <Header />
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div>
                            <div className="form-group">
                                <label className="inputType"><strong>Name:</strong></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="inputType"><strong>Tagline</strong></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="tagline"
                                    id="tagline"
                                    value={this.state.tagline}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="inputType"><strong>Description:</strong></label>
                                <input
                                    className='form-control'
                                    type="textarea"
                                    rows='3'
                                    name="description"
                                    id="description"
                                    value={this.state.description}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="inputType"><strong>First Brewed:</strong></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="first_brewed"
                                    id="first_brewed"
                                    value={this.state.first_brewed}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="inputType"><strong>Brewers tips:</strong></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="brewers_tips"
                                    id="brewers_tips"
                                    value={this.state.brewers_tips}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="inputType"><strong>Attenuation level:</strong></label>
                                <input
                                    className='form-control'
                                    type="number"
                                    name="attenuation_level"
                                    id="attenuation_level"
                                    value={this.state.attenuation_level}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>

    
                            <div className="form-group">
                                <label className="inputType"><strong>Created by:</strong></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="contributed_by"
                                    id="contributed_by"
                                    value={this.state.contributed_by}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form">
                                <button className="btn btn-primary text-white ml-2" type="submit">ADD NEW</button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }

    };

export default NewBeer; 