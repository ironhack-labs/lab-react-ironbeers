import React, { Component } from 'react'
import axios from 'axios'

class CreateNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by } = this.state;
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by })
            .then(res => {
                console.log(res)
                this.setState({
                    redirect: true
                })
            })

    }

    handleInput = e => {
        console.log(e);
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <div className="container">
                 <form onSubmit={this.handleSubmit}>

                    <div className="form-row">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name} 
                        />
                        <label for="tagline">Tagline</label>
                        <input
                            type="text"
                            name="tagline"
                            value={this.state.tagline}
                            onChange={this.handleInput}
                            className="form-control"
                        />
                        <label for="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInput}
                            className="form-control"
                        />
                        <label for="firstbrewed">First Brewed</label>
                        <input
                            type="text"
                            name='first_brewed'
                            className="form-control"
                            value={this.state.first_brewed}
                            onChange={this.handleInput}
                        />
                        <label for="brewerstips">Brewers Tips</label>
                        <input
                            type="text"
                            name="brewers_tips"
                            className="form-control"
                            value={this.state.brewer_tips}
                            onChange={this.handleInput}
                        />
                        <label for="attenuation_level">Attenuation Level </label>
                        <input
                            type="number"
                            name="attenuation_level"
                            className="form-control"
                            value={this.state.attenuation_level} 
                            onChange={this.handleInput}
                        />
                        <label for="contributed_by">Contributed By</label>
                        <input
                            type="text"
                            name="contributed_by"
                            className="form-control"
                            value={this.state.contributed_by}
                            onChange={this.handleInput}
                        />

                    </div>
                    <input type="submit" className='btn btn-primary' value="CreateNew" />
                </form>
            </div>
        );
    }
}

export default CreateNew;