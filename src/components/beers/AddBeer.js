import React, { Component, Fragment } from 'react';
import Header from '../header/Header';
import axios from 'axios';

export default class AddBeer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(() => {

                this.props.history.push('/beers');

            })
            .catch(error => console.log(error));
    }


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <Fragment>
                <Header />
                <div className='container py-5 my-5'>
                    <h3>Add a Beer</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name-input">Name</label>
                            <input type="text" id='name-input' name='name' className='form-control' value={this.state.name} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tagline-input">Tagline</label>
                            <input type="text" id='tagline-input' name='tagline' className='form-control' value={this.state.tagline} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description-input">Description</label>
                            <textarea name="description" id="description-input" cols="30" rows="10" className='form-control' value={this.state.description} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="first-brewed-input">First Brewed</label>
                            <input type="text" id='first-brewed-input' className='form-control' name='first_brewed' value={this.state.first_brewed} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="brewer-input">Brewers Tips</label>
                            <input type="text" id='brewer-input' className='form-control' name='brewers_tips' value={this.state.brewers_tips} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="attenuation-input">Attenuation Level</label>
                            <input type="number" name="attenuation_level" id="attenuation-input" className='form-control' value={this.state.attenuation_level} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contributed-input">Created by:</label>
                            <input type="text" id='contributed-input' className='form-control' name='contributed_by' value={this.state.contributed_by} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add Beer" className='form-control btn btn-primary mt-3' />
                        </div>
                    </form>

                </div>
            </Fragment>
        )
    }
}
