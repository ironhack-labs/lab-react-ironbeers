import React from "react";
import Button from "./Button";
import FormBeer from "./FormBeer";
import axios from "axios";
import Header from "./Header";
import "../Style/newBeer.css"

class NewBeer extends React.Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    };

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by,
        };

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
            .then((response) => {
                this.props.history.push("/beers");
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <div>
                <Header />
                <form className="form" onSubmit={this.handleSubmit}>

                    <FormBeer label="Name" htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormBeer>

                    <FormBeer label="Tagline" htmlFor="tagline">
                        <input
                            type="text"
                            id="tagline"
                            name="tagline"
                            value={this.state.tagline}
                            onChange={this.handleChange}
                        />
                    </FormBeer>

                    <FormBeer label="Description" htmlFor="description">
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description}
                        >
                        </textarea>
                    </FormBeer>

                    <FormBeer label="First_brewed" htmlFor="first_brewed">
                        <input
                            type="text"
                            id="first_brewed"
                            name="first_brewed"
                            value={this.state.first_brewed}
                            onChange={this.handleChange}
                        />
                    </FormBeer>

                    <FormBeer label="Brewers_tips" htmlFor="brewers_tips">
                        <input
                            type="text"
                            id="brewers_tips"
                            name="brewers_tips"
                            value={this.state.brewers_tips}
                            onChange={this.handleChange}
                        />
                    </FormBeer>

                    <FormBeer label="Attenuation_level" htmlFor="attenuation_level">
                        <input
                            type="number"
                            id="attenuation_level"
                            name="attenuation_level"
                            value={this.state.attenuation_level}
                            onChange={this.handleChange}
                        />
                    </FormBeer>

                    <FormBeer label="Contributed_by" htmlFor="contributed_by">
                        <input
                            type="text"
                            id="contributed_by"
                            name="contributed_by"
                            value={this.state.contributed_by}
                            onChange={this.handleChange}
                        />
                    </FormBeer>


                    <Button>Submit !</Button>
                </form>
            </div>
        );
    }
}

export default NewBeer;
