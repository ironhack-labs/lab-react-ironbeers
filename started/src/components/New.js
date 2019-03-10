import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/misc/Header';

export default class New extends Component {

    state = {
        error: null,
        newBeer: {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
    }

    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            newBeer: {
                ...this.state.newBeer,
                [name]: value
            }
        })
    }


    handleFormSubmit = (e) => {
        e.preventDefault();

        const{ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state.newBeer;
        // const name = this.state.newBeer.name;
        // const tagline = this.state.newBeer.tagline;
        // const description = this.state.newBeer.description;
        // const first_brewed = this.state.newBeer.first_brewed;
        // const brewers_tips = this.state.brewers_tips;
        // const attenuation_level = this.state.newBeer.attenuation_level;
        // const contributed_by = this.state.newBeer.contributed_by;

        const data = {
            name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by
            // name: name,
            // tagline: tagline,
            // description: description,
            // first_brewed: first_brewed,
            // brewers_tips: brewers_tips,
            // attenuation_level: attenuation_level,
            // contributed_by: contributed_by
        };
        console.log(data)

        fetch("https://ironbeer-api.herokuapp.com/beers/new", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        })


            .then(() => {
                console.log("se creo con exito")
                this.setState({
                    newBeer: {
                        name: '',
                        tagline: '',
                        description: '',
                        first_brewed: '',
                        brewers_tips: '',
                        attenuation_level: '',
                        contributed_by: ''
                    }
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    };


    render() {

        const { error } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    <Header />
                    <div className="">

                        <form className="column " onSubmit={this.handleFormSubmit}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input is-rounded" name="name" type="text" value={this.state.newBeer.name}
                                        onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Tagline</label>
                                <div className="control">
                                    <input className="input is-rounded" name="tagline" type="text" value={this.state.newBeer.tagline}
                                        onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea className="textarea is-rounded" name="description" value={this.state.newBeer.description}
                                        onChange={this.handleChange}></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">First Brewed</label>
                                <div className="control">
                                    <input className="input is-rounded " type="text" name="first_brewed" value={this.state.newBeer.first_brewed}
                                        onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Brewers Tips</label>
                                <div className="control">
                                    <input className="input is-rounded" type="text" name="brewers_tips" value={this.state.newBeer.brewers_tips}
                                        onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Attenuation Level</label>
                                <div className="control">
                                    <input className="input is-rounded" type="number" name="attenuation_level" value={this.state.newBeer.attenuation_level}
                                        onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Contributed By</label>
                                <div className="control">
                                    <input className="input is-rounded" type="text" name="contributed_by" value={this.state.newBeer.contributed_by}
                                        onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button className="button is-info is-rounded is-fullwidth ">ADD NEW</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            )
        }
    }

}