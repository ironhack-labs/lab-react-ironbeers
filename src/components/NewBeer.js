import React from 'react';
import axios from "axios";
import Header from './Header';
import './NewBeer.css'

class NewBeer extends React.Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",

    }

    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmitForm = async (event) => {
        event.preventDefault();
        await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state);

        this.setState({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
        });
    };


    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        return (
            <>
                <Header />
                <form className="newForm" onSubmit={this.handleSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" onChange={this.handleChange} value={name} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" id="tagline" name="tagline" onChange={this.handleChange} value={tagline} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Textarea">Description</label>
                        <textarea name="description" onChange={this.handleChange} value={description} className="form-control" id="Textarea" rows="6"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstBrewed">First Brewed</label>
                        <input type="text" id="firstBrewed" name="first_brewed" onChange={this.handleChange} value={first_brewed} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewerTips">Brewer Tips</label>
                        <input type="text" id="brewerTips" name="brewers_tips" onChange={this.handleChange} value={brewers_tips} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuationLevel">Attenuation Level</label>
                        <input type="number" id="attenuationLevel" name="attenuation_level" onChange={this.handleChange} value={attenuation_level} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributedBy">Contributed by</label>
                        <input type="text" id="contributedBy" name="contributed_by" onChange={this.handleChange} value={contributed_by} className="form-control" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">ADD NEW</button>
                    </div>
                </form>
            </>

        )
    }
}






export default NewBeer;