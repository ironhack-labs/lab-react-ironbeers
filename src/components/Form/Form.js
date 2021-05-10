import React, { Component } from 'react'
import BeersService from '../../services/beers.service';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
          }          
        }
        this.BeersService = new BeersService();
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log("Antes del request");       
          this.BeersService.create(this.state.fields)
          .then((newBeer) => {
              console.log(newBeer);
            this.setState({
                fields: {
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: "",
                    contributed_by: ""
                }            
            })          
          })
          .catch((error) => console.error(error));        
      }

      handleChange(event) {
        const { name, value } = event.target;
        this.setState({
          fields: {
            ...this.state.fields,
            [name]: value
          }
        });
      }


    render() {
        const { fields } = this.state;
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }} >
                <div className="form-item">
                    <label htmlFor="name">Name: </label>
                    <input placeholder="Name..." type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                   <label htmlFor="tagline">Tagline: </label>
                   <input placeholder="tagline..." type="text" name="tagline" value={fields.tagline} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="description">Description: </label>
                    <input placeholder="Description..." type="text" name="description" value={fields.description} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="first_brewed">First brewed: </label>
                    <input placeholder="First brewed" type="text" name="first_brewed" value={fields.first_brewed} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="brewers_tips">Brewers tip: </label>
                    <input placeholder="Tip" type="text" name="brewers_tips" value={fields.brewers_tips} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="attenuation_level">Attenuation level: </label>
                    <input placeholder="Level..." type="number" name="attenuation_level" value={fields.attenuation_level} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="contributed_by">Contributed: </label>
                    <input placeholder="Contributed..." type="text" name="contributed_by" value={fields.contributed_by} onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit">Create Beer</button>
                </form>
            </div>
        )
    }
}
