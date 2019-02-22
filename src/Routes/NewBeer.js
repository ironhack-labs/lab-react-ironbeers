import React, { Component } from 'react';
import axios from 'axios';


class NewBeer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
        this.updateState = this.updateState.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    updateState(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value }, () => {
            console.log(this.state);
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
        .then(response => {
            console.log(response);
        })
    }

    render () {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Name</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.name} type="text" placeholder="Name" name='name' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Tagline</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.tagline} type="text" placeholder="Tagline" name='tagline' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Description</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.description} type="text" placeholder="Description" name='description' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">First Brewed</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.first_brewed} type="text" placeholder="First Brewed" name='first_brewed' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Brewers Tips</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.brewers_tips} type="text" placeholder="Brewers Tips" name='brewers_tips' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Attenuation Level</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.attenuation_level} type="number" placeholder="Attenuation Level" name='attenuation_level' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Contributed By</label>
                </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.contributed_by} type="text" placeholder="Contributed By" name='contributed_by' />
                            </p>
                        </div>
                    </div>
                </div>

            <input type='submit' value='submit'></input>
        </form>
        )
    }
}

export default NewBeer;