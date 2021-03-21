import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'

export class BeerForm extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''

    }

   handleName = (event) => {
       this.setState({
           name: event.target.value
       })
   }

   handleTagline = (event) => {
        this.setState({
            tagline: event.target.value
        })
    }

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleFirstB = (event) => {
        this.setState({
            first_brewed: event.target.value
        })
    }
    handleBrewersTips = (event) => {
        this.setState({
            brewers_tips: event.target.value
        })
    }
    handleAttenuationLevel = (event) => {
        this.setState({
            attenuation_level: event.target.valueAsNumber 
        })
    }
    handleContributedBy = (event) => {
        this.setState({
            contributed_by: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("ERRROR", error);
          });

      }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                
                <form onSubmit={this.handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={(e) => this.handleName(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tagline" className="form-label">Tagline</label>
                        <input type="text" className="form-control" id="tagline" value={this.state.tagline} onChange={(e) => this.handleTagline(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={this.state.description} onChange={(e) => this.handleDescription(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="first_brewed" className="form-label">First Brewed</label>
                        <input type="text" className="form-control" id="first_brewed"  value={this.state.first_brewed} onChange={(e) => this.handleFirstB(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="brewers_tips" className="form-label" >Brewers tips</label>
                        <input type="text" className="form-control" id="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleBrewersTips(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="attenuation_level" className="form-label" >Attenuation level</label>
                        <input type="number" className="form-control" id="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleAttenuationLevel(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contributed_by" className="form-label">Contributed by</label>
                        <input type="text" className="form-control" id="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleContributedBy(e)}/>
                    </div>
                    <button className="btn btn-primary">
                        ADD NEW
                    </button>
                </form>
            </div>
        )
    }
}

export default BeerForm
