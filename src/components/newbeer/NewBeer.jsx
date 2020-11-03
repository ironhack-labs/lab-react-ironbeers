import Axios from 'axios'
import React, { Component } from 'react'



export default class newBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    }

    

    handleChange(event) {
        let { name, value } = event.target
        this.setState({[name]: value})
    }


    handleFormSubmit (e) {
        e.preventDefault()

        Axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .catch(err => console.log(err))
    }


    render() {
        
        return (
            <div>
                <form className='mx-5 my-5' onSubmit={(e) => this.handleFormSubmit(e)}>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} ></input>
                    </div>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="tagline">Tagline</label>
                        <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} ></input>
                    </div>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="description">Description</label>
                        <textarea type="text" className="form-control" rows='5' id="description" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="first_brewed">First brewed</label>
                        <input type="text" className="form-control" id="firstBrewed" name="first_brewed" value={this.state.firstBrewed} onChange={(e) => this.handleChange(e)} ></input>
                    </div>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="brewers_tips">Brewers tips</label>
                        <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" value={this.state.brewersTips} onChange={(e) => this.handleChange(e)} ></input>
                    </div>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="attenuation_level">Attenuation level</label>
                        <input type="number" className="form-control" id="attenuation_level" name="attenuation_level" value={this.state.attenuationLevel} onChange={(e) => this.handleChange(e)} ></input>
                    </div>
                    <div className="form-group">
                        <label className ='font-weight-bold' htmlFor="contributed_by">Contributed by</label>
                        <input type="text" className="form-control" id="contributed_by" name='contributed_by' value={this.state.contributedBy} onChange={(e) => this.handleChange(e)} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add New</button>
                </form>
                
            </div>
        )
    }
}
