import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { createBeer } from '../services/BaseSevices';
import Header from './Header';
class NewBeer extends Component {

    state = {

        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    }


    onSubmit = e => {
        e.preventDefault()
        createBeer({ ...this.state })
            .then(() => {
                this.props.history.push('/beers');
            })
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    render() {

        return (


            <div className="Newbeer">
                <Header />

                <form onSubmit={this.onSubmit}>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto py-3">
                            <label htmlFor="name" className="col-form-label">Name: </label>
                        </div>
                        <div className="col-auto">

                            <input
                                id="name" name="name" className="form-control" onChange={this.onChange} value={this.value} placeholder="Name">
                            </input>
                        </div>

                    </div>


                    <div className="row g-3 align-items-center">

                        <div className="col-auto py-3">

                            <label htmlFor="tagline" className="col-form-label">Tag line: </label>
                        </div>
                        <div className="col-auto">
                            <input
                                id="tagline" name="tagline" className="form-control" onChange={this.onChange} value={this.value} placeholder="Tagline">
                            </input>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto py-3">
                            <label htmlFor="description" className="col-form-label">Description: </label>
                        </div>
                        <div className="col-auto">
                            <input
                                id="description" name="description" className="form-control" onChange={this.onChange} value={this.value} placeholder="Description">
                            </input>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto py-3">
                            <label htmlFor="first_brewed" className="col-form-label">First brewed: </label>
                        </div>
                        <div className="col-auto">
                            <input
                                id="first_brewed" name="first_brewed" className="form-control" onChange={this.onChange} value={this.value} placeholder="First_brewed">
                            </input>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto py-3">
                            <label htmlFor="brewers_tips" className="col-form-label">Brewers tips: </label>
                        </div>
                        <div className="col-auto">
                            <input
                                id="brewers_tips" name="brewers_tips" className="form-control" onChange={this.onChange} value={this.value} placeholder="Brewers_tips">
                            </input>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto py-3">
                            <label htmlFor="attenuation_level" className="col-form-label">Attenuation level: </label>
                        </div>
                        <div className="col-auto">
                            <input
                                id="attenuation_level" name="attenuation_level" className="form-control" onChange={this.onChange} value={this.value} placeholder="Attenuation_level"
                                type="number" min={0}>

                            </input>
                        </div>
                    </div>

                    <button type="btn btn-primary">Submit</button>
                </form>



            </div>



        )

    }
}

export default NewBeer;