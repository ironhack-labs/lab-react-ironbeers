import axios from 'axios';
import React from 'react';
import Navbar from '../navbar/Navbar';

const initial = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
}
class NewBeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }
    
    handleChange = (event) => {
        const { id, value } = event.target;

        this.setState((prev) => {
            return {
                ...prev,
                [id] : value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by  
        })
        .then((beer => {
            this.setState({
                initial
            })
            this.props.history.push('/beers')
        }))
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container d-flex justify-content-center">
                    <form className="w-50 text-success fw-bold" onSubmit={this.handleSubmit}>
                    <h1>Add a new Beer in your collection!</h1>
                        <div className="form-group mb-2">
                            <label htmlFor="name">Name</label>
                            <input className="form-control rounded" type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="tagline">Tagline</label>
                            <input className="form-control" type="text" id="tagline" value={this.state.tagline} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="description">Description</label>
                            <input className="form-control" type="text" id="description" value={this.state.description} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="first_brewed">First brewed</label>
                            <input className="form-control" type="text" id="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="brewers_tips">Brewers tips</label>
                            <input className="form-control" type="text" id="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="attenuation_level">Attenuation level</label>
                            <input className="form-control" type="number" id="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="contributed_by">Contributed by</label>
                            <input className="form-control" type="text" id="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary" type="submit">Add your Beer</button>               
                    </form>
                </div>
                
            </div>
        )
    }
}

export default NewBeer;