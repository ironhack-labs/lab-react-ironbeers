import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';


class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = { newName: "", newtagline: "", newDescription: "", newFirts_brewed: "", newBrewers_tips: "", newAttenuation_level: "", newContributed_by: "" };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/projects", {
            theName: this.state.newName,
            theTagline: this.state.newName,
            theDescription: this.state.newDescription,
            theFirst_brewed: this.state.newFirts_brewed,
            theBrewers_tips: this.state.newBrewers_tips,
            theAttenuation_level: this.state.newAttenuation_level,
            theContributed_by: this.state.newContributed_by
        })
            .then(() => {
                this.props.getData();
                // this function updates the list in ProjectIndex.js
                this.setState({ newName: "", theTagline: "", newDescription: "", newFirst_brewed: "", newBrewers_tips: "", newAttenuation_level: "", newContributed_by: "" });
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container form-container">

                    <form onSubmit={this.handleFormSubmit}>
                        <div className="row">
                            <label>Name:</label>
                            <input type="text" name="newName" value={this.state.newName} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="row">
                            <label>Tagline:</label>
                            <input type="text" name="newTagline" value={this.state.newTagline} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="row">
                            <label>Description:</label>
                            <textarea name="newDescription" value={this.state.newDescription} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="row">
                            <label>First brewed:</label>
                            <input type="text" name="newFirst_brewed" value={this.state.newFirts_brewed} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="row">
                            <label>Brewers tips:</label>
                            <input type="text" name="new" value={this.state.newBrewers_tips} onChange={e => this.handleChange(e)} />
                        </div>

                        <input type="submit" value="Submit" />


                    </form>
                </div>
            </div>
        )
    }
}

export default NewBeer;
