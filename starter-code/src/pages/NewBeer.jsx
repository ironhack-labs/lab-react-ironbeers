import React, { Component } from 'react'
import Header from "../components/Header";
import axios from "axios";

class NewBeer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: "",
        }
    }

    handleChange = (event => {
        this.setState({ [event.target.name]: event.target.value})
    });

    handleForm = (event) => {
        event.preventDefault();

        const fd = new FormData();

        fd.append("name", this.state.name);
        fd.append("tagline", this.state.name);
        fd.append("description", this.state.name);
        fd.append("first_brewed", this.state.name);
        fd.append("brewers_tips", this.state.name);
        fd.append("attenuation_level", this.state.name);
        fd.append("contributed_by", this.state.name);

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/", fd)
        .then((apiResponse) => {
            this.props.history.push("/beers");
        })
        .catch((apiError) => {
            console.log(apiError)
        });
    };
    render() {
        return (
            <div>
             <Header/>
                <h1>New Beer</h1>

                <form className="form-new" onChange={this.handleChange} 
                onSubmit={this.handleForm}>
                    <div className="form-div">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name"></input>
                    </div>
                    <div className="form-div">
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" id="tagline" name="tagline"></input>
                    </div>
                    <div className="form-div">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" id="description" name="description"></textarea>
                        
                    </div>
                    <div className="form-div">
                        <label htmlFor="first_brewed">First brewed</label>
                        <input type="text" id="first_brewed" name="first_brewed"></input>
                    </div>
                    <div className="form-div">
                        <label htmlFor="brewers_tips">Brewers tips</label>
                        <input type="text" id="brewers_tips" name="brewers_tips"></input>
                       </div>
                       <div className="form-div">
                        <label htmlFor="attenuation_level">Attenuation level</label>
                        <input type="number"id="attenuation_level" name="attenuation_level"></input>
                    </div>
                    <div className="form-div">
                        <label htmlFor="contributed_by">Contributed by</label>
                        <input type="text" id="contributed_by" name="contributed_by"></input>
                        
                    </div>
                    <button>ADD NEW</button>
                </form>
             
            </div>
        )
    }
}
export default NewBeer;