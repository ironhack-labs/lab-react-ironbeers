import React, { Component } from 'react';
import axios from 'axios';

class AddBeer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 1,
            contributed_by: ''
        }
    }


    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleTagLineInput = (event) => {
        this.setState({
            tagline: event.target.value
        })
    }

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handlefirstBrewed = (event) => {
        this.setState({
            first_brewed: event.target.value
        })
    }

    handleBrewersTips = (event) => {
        this.setState({
            brewers_tips: event.target.value
        })
    }

    handleattenuationLevel = (event) => {
        this.setState({
            attenuation_level: event.target.value
        })
    }

    handlecontributedBy = (event) => {
        this.setState({
            contributed_by: event.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.setState.contributed_by
        })

        axios.post('https://ironbeer-api.herokuapp.com/beers/new', this.state)
            .then(res => {
                alert('New beer has been added')
                this.props.history.push('/beers')
            })
            .catch(error => console.log(error));
    }



    render() {
        return (
            < form onSubmit={this.handleFormSubmit}>
                <div className='row'>
                    <div className="form-group col">
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={(e) => { this.handleNameInput(e) }} className="form-control" id="formGroupExampleInput" placeholder="Name" />
                    </div>
                    <div className="form-group col">
                        <label>Tag Line</label>
                        <input type="text" value={this.state.tagline} onChange={(e) => { this.handleTagLineInput(e) }} className="form-control" id="formGroupExampleInput2" placeholder="Tag Line" />
                    </div>
                    <div className="form-group col">
                        <label>Description</label>
                        <input type="text" value={this.state.description} onChange={(e) => { this.handleDescription(e) }} className="form-control" id="formGroupExampleInput2" placeholder="Tag Line" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label>First Brewed</label>
                        <input type="text" value={this.state.first_brewed} onChange={(e) => { this.handlefirstBrewed(e) }} className="form-control" id="formGroupExampleInput2" placeholder="First Brewed" />
                    </div>
                    <div className="form-group col">
                        <label>Brewers Tips</label>
                        <input type="text" value={this.state.brewers_tips} onChange={(e) => { this.handleBrewersTips(e) }} className="form-control" id="formGroupExampleInput2" placeholder="First Brewed" />
                    </div>
                    <div className="form-group col">
                        <label>Attenuation level</label>
                        <input type="text" value={this.state.attenuation_level} onChange={(e) => { this.handleattenuationLevel(e) }} className="form-control" id="formGroupExampleInput2" placeholder="Attenuation level" />
                    </div>
                    <div className="form-group col">
                        <label>Contributed by</label>
                        <input type="text" value={this.state.contributed_by} onChange={(e) => { this.handlecontributedBy(e) }} className="form-control" id="formGroupExampleInput2" placeholder="Contributed by" />
                    </div>
                </div>
                <div className='form-group'>
                    <input type="submit" value="Submit" />
                </div>
            </form >
        )
    }
}


export default AddBeer;