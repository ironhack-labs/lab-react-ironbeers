import React, { Component, Fragment } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

import Header from './Header';

class NewBeer extends Component {
    handleSubmit = (ev) => {
        ev.preventDefault()
        const form =  new FormData(ev.target)
        const name = form.get('name');
        const tagline = form.get('tagline');
        const description = form.get('description');
        const first_brewed = form.get('firstBrewed');
        const brewers_tips = form.get('brewersTips');
        const attenuation_level = form.get('attenuation');
        const contributed_by = form.get('contributedBy');

        const body = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }

        axios.post('https://sample-api-ih.herokuapp.com/new', body)
            .then( res => {
                M.toast({html: res.data.message})
                this.form.reset()
            })
            .catch(err => {
                console.log(err)
            })
    }

    setForm = (el) => {
        this.form = el
    }

    render() {
        return(
            <Fragment>
                <Header />
                <div className="container form-container">
                    <div className="row">
                        <form ref={this.setForm} className="col s12 m6 push-m3" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="name" type="text" name="name" className="validate" />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="tagline" type="text" name="tagline" className="validate" />
                                    <label htmlFor="tagline">Tagline</label>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="description" type="text" name="description" className="materialize-textarea"></textarea>
                                    <label htmlFor="description">Description</label>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="firstBrewed" type="text" name="firstBrewed" className="validate" />
                                    <label htmlFor="firstBrewed">First Brewed</label>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="brewersTips" type="text" name="brewersTips" className="validate" />
                                    <label htmlFor="brewersTips">Brewers Tips</label>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="attenuation" type="number" min="0" name="attenuation" className="validate" />
                                    <label htmlFor="attenuation">Attenuation Level</label>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="contributedBy" type="text" name="contributedBy" className="validate" />
                                    <label htmlFor="contributedBy">Contributed By</label>
                                </div>
                            </div>
    
                            <button className="col s12 btn add-beer-btn">Add New</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NewBeer;
