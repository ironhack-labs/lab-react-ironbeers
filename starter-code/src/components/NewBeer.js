import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class NewBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewer_tips: '',
            attenuation_level: '',
            contributed_by: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by } = this.state;
        
        axios
            .post("http://ih-beers-api.herokuapp.com/beers/new", {
                name,tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by
            })
            .then(() => {
                this.setState({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewer_tips: '',
                    attenuation_level: '',
                    contributed_by: '', 
                })
            })
            .catch((error)=> console.log(error))
        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="forms">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    

                    <div className="forms">
                        <label>Tagline</label>
                        <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
                    </div>

                    <div className="forms">
                        <label>Description</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    </div>

                    <div className="forms">
                        <label>First Brewed</label>
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
                    </div>
                    
                    <div className="forms">
                        <label>Brewer Tips</label>
                        <input type="text" name="brewer_tips" value={this.state.brewer_tips} onChange={this.handleChange} />
                    </div>
                    
                    <div className="forms">
                        <label>Attenuation Level</label>
                        <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />
                    </div>

                    <div className="forms">
                        <label>Contributed by</label>
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
                        <br />
                        <input className="submit" type="submit" value="ADD NEW"></input>
                    </div>
                   
                </form>
            </div>
        )
    }
}
