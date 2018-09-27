import React, { Component } from 'react';
import './AddBeer.css';
import Header from '../../components/Header/Header';
import axios from 'axios';

class AddBeer extends Component {

    state={
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
        message: ""
    };

    handleChange= (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        })
    };

    handleFormSubmit = (event) => {
        const beer = { ...this.state};

        event.preventDefault();

        axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, beer)
            .then( (res) => {
                const { message } = res.data;
                this.setState({
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: "",
                    contributed_by: "",
                    message:  message
                });

                setTimeout(() => {
                    this.setState({
                        message: ""
                    });
                }, 2000);
            })
            .catch( error => console.log(error) )
    };


    render() {
        return (
            <div>
                <Header />
                <form className="col-12 col-md-4 main-form" onSubmit={ this.handleFormSubmit }>
                    {
                        this.state.message ? <p className="alert alert-success">{ this.state.message }</p> : null
                    }
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={ this.state.name} className="form-control" id="name" name="name"onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" value={ this.state.tagline} className="form-control" id="tagline" name="tagline" onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea rows="7" value={ this.state.description} className="form-control" id="description" name="description" onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input type="date" value={ this.state.first_brewed} className="form-control" id="first_brewed" name="first_brewed" onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewers Tips</label>
                        <input type="text" value={ this.state.brewers_tips} className="form-control" id="brewers_tips" name="brewers_tips" onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attenuation Level</label>
                        <input type="text" value={ this.state.attenuation_level} className="form-control" name="attenuation_level" id="attenuation_level" onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed By</label>
                        <input type="text" className="form-control" value={ this.state.contributed_by} name="contributed_by" id="contributed_by" onChange={ this.handleChange }/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">ADD NEW</button>
                </form>
            </div>
        );
    }
}

export default AddBeer;