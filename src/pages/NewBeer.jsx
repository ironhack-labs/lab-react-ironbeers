import React, {Component} from 'react';
import Header from '../components/Header';
import beerAPI from '../api/beerApi';
import Loader from '../components/Loader';

import { Redirect } from "react-router-dom";

import "../styles/NewBeer.css";
class NewBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
            redirect: null,
            isLoading: false,
            errorMessage: '',
            formIsValid: false,
        };
    };

    handlerSubmit = (e) => {
        e.preventDefault();


        console.log('handler submit');
        let { 
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,  
        } = this.state;

        attenuation_level = parseInt(attenuation_level);
        if( typeof name === 'string' &&
            typeof tagline === 'string' &&
            typeof description === 'string' &&
            typeof first_brewed === 'string' &&
            typeof brewers_tips === 'string' &&
            typeof attenuation_level === 'number' &&
            typeof contributed_by === 'string') 
        
            {
            this.setState({
                formIsValid: true
            });

            const newBeer = {
                ...this.state,
                attenuation_level,
            }

            if(this.state.formIsValid) {
                this.setState({
                    isLoading: true,
                });
        
                beerAPI.postNewBeer(newBeer)
                    .then((resApi) => {
                        if(resApi.status === 200) {
                            this.setState({
                                redirect: true
                            });
                        }
                    }).catch((errApi) => {
                        console.log(errApi);
                        this.setState({
                            errorMessage: errApi.message
                        });
                    })
                    .finally(() => {
                        this.setState({
                            isLoading:false
                        });
                    });
            }
  
        } else {
            this.setState({
                formIsValid: false
            })
        }
        
    }

    handlerChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
        console.log(`${name}: ${
            this.state[name]
        }`);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="new-beer">
                <Header/>
                {this.state.isLoading && (
                    <Loader />
                )}

                <form onSubmit={
                    (e) => {
                        this.handlerSubmit(e)
                    }
                }>
                    <div className="container">
                        <div className="field">
                            <label className="label" htmlFor="input-name">Name</label>
                            <div className="control">
                                <input id="input-name" className="input" name="name" type="text" placeholder="e.g Alex Smith"
                                    value={
                                        this.state.name
                                    }
                                    onChange={
                                        (e) => this.handlerChange(e)
                                    }
                                    required/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="input-tagline">Tagline</label>
                            <div className="control">
                                <input id="input-tagline" className="input" name="tagline" type="text" placeholder="e.g Alex Smith"
                                    value={
                                        this.state.tagline
                                    }
                                    onChange={
                                        (e) => this.handlerChange(e)
                                    }
                                    required/>

                            </div>
                        </div>

                        <div>
                            <div className="field-label is-normal">
                                <label className="label" htmlFor="textarea-desceiption">Description</label>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field">
                                    <div className="control">
                                        <textarea id="textarea-description" name="description" className="textarea" placeholder="Explain how we can help you" required
                                            value={
                                                this.state.description
                                            }
                                            onChange={
                                                (e) => this.handlerChange(e)
                                        }>
                                            {
                                            this.state.description
                                        }</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="input-first_brewed">First Brewed</label>
                            <div className="control">
                                <input id="input-first_brewed" className="input" name="first_brewed" type="text" placeholder="e.g Alex Smith"
                                    value={
                                        this.state.first_brewed
                                    }
                                    onChange={
                                        (e) => this.handlerChange(e)
                                    }
                                    required/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="input-brewers_tips">Brewers Tips</label>
                            <div className="control">
                                <input id="input-brewers_tips" className="input" name="brewers_tips" type="text" placeholder="e.g Alex Smith"
                                    value={
                                        this.state.brewers_tips
                                    }
                                    onChange={
                                        (e) => this.handlerChange(e)
                                    }
                                    required/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="input-attenuation">Attenuation Level</label>
                            <div className="control">
                                <input id="input-attenuation" className="input" name="attenuation_level" type="number" placeholder="e.g Alex Smith"
                                    value={
                                        this.state.attenuation_level
                                    }
                                    onChange={
                                        (e) => this.handlerChange(e)
                                    }
                                    required/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="input-contributed">Contributed By</label>
                            <div className="control">
                                <input id="input-contributed" className="input" name="contributed_by" type="text" placeholder="e.g Alex Smith"
                                    value={
                                        this.state.contributed_by
                                    }
                                    onChange={
                                        (e) => this.handlerChange(e)
                                    }
                                    required/>
                            </div>
                        </div>


                    </div>
                    {this.state.errorMessage !== '' && (
                        <p className="is-danger">{this.state.errorMessage}</p>
                    )}

                    <div className="fiel">
                        <div className="control">
                            <button className="button is-primary is-fullwidth">
                                Add new
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        )

    }


}

export default NewBeer;
