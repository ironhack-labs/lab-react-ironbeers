import React, { Component } from 'react'
import axios from "axios"; //  npm i axios

export default class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips:"",
        contributed_by:"",
        attenuation_level:0
    };

    updateState = e => {
        // if (e.target.name === "avatar") return;
        this.setState({ [e.target.name]: e.target.value });
    };

    sendData = (e) => {
        e.preventDefault()

        const beer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips:this.state.brewers_tips,
            contributed_by:this.state.contributed_by,
            attenuation_level:Number(this.state.attenuation_level)
        };

        console.log(beer)
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
            .then(apiRes => {
                debugger
                console.log("error")
                // this.setState({ beer: apiRes.data })
            })
            .catch(apiErr => console.error(apiErr));
    }

    render() {
        return (
            <div>
                <form
                id="newbeer"
                className="form"
                onChange={this.updateState}
                onSubmit={this.sendData}
                >

                    <div className="content">
                    <h1 className="title">Send a new beer</h1>

                    <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="name"
                    />
                    <input
                        type="text"
                        name="tagline"
                        className="input"
                        placeholder="tagline"
                    />
                    <input
                        type="text"
                        name="description"
                        className="input"
                        placeholder="description"
                    />
                        <input
                        type="text"
                        name="first_brewed"
                        className="input"
                        placeholder="first_brewed"
                    />
                        <input
                        type="text"
                        name="brewers_tips"
                        className="input"
                        placeholder="brewers_tips"
                    />
                    <input
                        type="text"
                        name="contributed_by"
                        className="input"
                        placeholder="contributed_by"
                    />
                      <input
                        type="number"
                        name="attenuation_level"
                        className="input"
                        placeholder="attenuation_level"
                    />

                    <button className="btn">Sign-up</button>
                    
                    </div>
                </form>
            </div>
        )
    }
}
