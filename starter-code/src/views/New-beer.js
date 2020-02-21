import React, { Component } from 'react';
import axios from "axios"; //  npm i axios

export default class NewBeer extends Component {
    state = {
        beers: [],
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers/new",
        name:'',
        tagline: '',
        description: '',
        first_brewed: '',
    };

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }
    handleChangeDesc  = event => {
        this.setState({ description: event.target.value });
    }
    handleChangeTag = event => {
        this.setState({ tagline: event.target.value });
    }
    handleChangeFirst = event => {
        this.setState({ first_brewed: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const newBeer = {
            "image_url": "https://images.punkapi.com/v2/keg.png",
            "name": this.state.name,
            "description": this.state.description,
            "tagline": this.state.tagline,
            "first_brewed": this.state.first_brewed
        }

        axios
            .post(this.state.APIEndpoint, newBeer)
            .then(apiRes =>  {
            })

            .catch(apiErr => console.error(apiErr));
    }

    render() {
        return  (
            <div className="page">
                <h1 className="title">New Beer</h1>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Beer Name:
                        <input type="text" name="name" onChange={this.handleChangeName} />
                        </label>
                        <label>
                            Beer first brewed:
                            <input type="text" name="first_brewed" onChange={this.handleChangeFirst} />
                        </label>
                        <label>
                            Beer tag line:
                            <input type="text" name="tagline" onChange={this.handleChangeTag} />
                        </label>
                        <label>
                            Beer description:
                            <input type="text" name="description" onChange={this.handleChangeDesc} />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>

            </div>
        )


    }
}



