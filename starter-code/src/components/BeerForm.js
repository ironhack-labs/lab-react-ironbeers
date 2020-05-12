import React, { Component } from "react";
import Header from "./Header";
import { addBeer } from "../services/beerService"

class BeerForm extends Component {
    state = {
        beer: {},
    }

    handleChange = (e) => {
        let { beer } = this.state;
        beer = { ...beer, [e.target.name]: e.target.value }
        this.setState({ beer })
    }

    handleSubmit = (e) => {
        let { beer } = this.state;
        e.preventDefault();
        console.log(beer);
        addBeer(beer)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="uk-margin">
                    <form className="uk-form-stacked uk-width-2-3 uk-align-center" onSubmit={this.handleSubmit}>
                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">Name</label>
                            <div className="uk-form-controls">
                                <input
                                    onChange={this.handleChange}
                                    name="name"
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">Tagline</label>
                            <div className="uk-form-controls">
                                <input
                                    onChange={this.handleChange}
                                    name="tagline"
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">Description</label>
                            <div className="uk-margin">
                                <textarea
                                    onChange={this.handleChange}
                                    name="description"
                                    style={{ borderRadius: "20px" }}
                                    className="uk-textarea"
                                    rows="8">
                                </textarea>
                            </div>

                        </div>

                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">First Brewed</label>
                            <div className="uk-form-controls">
                                <input
                                    onChange={this.handleChange}
                                    name="first_brewed"
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">Brewers Tips</label>
                            <div className="uk-form-controls">
                                <input
                                    onChange={this.handleChange}
                                    name="brewers_tips"
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">Attenuation Level</label>
                            <div className="uk-form-controls">
                                <input
                                    onChange={this.handleChange}
                                    name="attenuation_level"
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="number"
                                    step="0.01"
                                />
                            </div>
                        </div>

                        <div className="uk-margin uk-text-left">
                            <label className="uk-form-label uk-margin-left uk-text-bold">Contributed By</label>
                            <div className="uk-form-controls">
                                <input
                                    onChange={this.handleChange}
                                    name="contributed_by"
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                />
                            </div>
                        </div>

                        <button className="uk-width-2-3 button-form">ADD NEW BEER</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default BeerForm;