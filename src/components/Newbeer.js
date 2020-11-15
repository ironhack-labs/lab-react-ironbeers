import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios';

export class Newbeer extends Component {
    state = { 
            name: "", 
            tagline: "",
            description: "",
            first_breved: "",
            brewer_tips:"",
            attenuation_level: 0,
            contributed_by: "",
        };
      

      handleFormSubmit = event => {
        event.preventDefault();
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const firstBreved = this.state.first_breved;
        const brewerTips = this.state.brewer_tips;
        const attenuationLevel = this.state.attenuation_level;
        const contributedBy = this.state.contributed_by;
        axios
          .post("https://api.punkapi.com/v2/beers/new", { name, tagline, description, firstBreved, brewerTips, attenuationLevel, contributedBy})
          .then(() => {
            this.props.getData();
            this.setState({ 
            name: "", 
            tagline: "",
            description: "",
            first_breved: "",
            brewer_tips:"",
            attenuation_level: 0,
            contributed_by: "",
             });
          })
          .catch(error => console.log(error));
      };


      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render() {
        return (
            <div>
                <Header />
                <div>
                    <form  onSubmit={this.handleFormSubmit}>
                    <lable>name: </lable>
                    <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/><br/>

                    <lable>tagline: </lable>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)}/><br/>

                    <lable>description: </lable>
                    <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/><br/>

                    <lable>first_breved: </lable>
                    <input type="text" name="first_breved" value={this.state.first_breved} onChange={e => this.handleChange(e)}/><br/>

                    <lable>brewer_tips: </lable>
                    <input type="text" name="brewer_tips" value={this.state.brewer_tips} onChange={e => this.handleChange(e)}/><br/>

                    <lable>attenuation_level: </lable>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={e => this.handleChange(e)}/><br/>

                    <lable>contributed_by: </lable>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={e => this.handleChange(e)}/><br/>

                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Newbeer
