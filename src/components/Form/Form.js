import React, { Component } from 'react';
import BeersService from '../../services/beers.service';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: '',
                contributed_by: ''
            },
            errors: {
                
            }
        }
        this.beersService = new BeersService();
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({
            fields:{
                ...this.state.fields,
                [name] : value
            }            
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.beersService.create(this.state.fields)
            .then( () =>{
                console.log("Created");
                this.setState({
                    fields: {
                        name: '',
                        tagline: '',
                        description: '',
                        first_brewed: '',
                        brewers_tips: '',
                        attenuation_level: '',
                        contributed_by: ''
                    }   
                })
            })
            .catch((err) => console.error(err));        
    }
  

    render() {
        const { fields } = this.state;
        return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={fields.name}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="tagline">Tagline</label>
                <input
                    type="text"
                    className="form-control"
                    id="tagline"
                    name="tagline"
                    value={fields.tagline}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={fields.description}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="first_brewed">First Brewed</label>
                <input
                    type="text"
                    className="form-control"
                    id="first_brewed"
                    name="first_brewed"
                    value={fields.first_brewed}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input
                    type="text"
                    className="form-control"
                    id="brewers_tips"
                    name="brewers_tips"
                    value={fields.brewers_tips}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input
                    type="number"
                    className="form-control"
                    id="attenuation_level"
                    name="attenuation_level"
                    value={fields.attenuation_level}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="contributed_by">Contributed by</label>
                <input
                    type="text"
                    className="form-control"
                    id="contributed_by"
                    name="contributed_by"
                    value={fields.contributed_by}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <button className="btn btn-primary" type="submit">ADD NEW</button>
        </form>
        );
  }
}
