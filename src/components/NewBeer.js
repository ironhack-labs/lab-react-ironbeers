import React, { PureComponent } from 'react'
import axios from 'axios'

class NewBeer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attunation_level: 0,
            contributed_by: '',
            showingForm: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addBeer = (event) => {
        event.preventDefault()
        let beer = { ...this.state }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer).then(res => {
            console.log(res)
        })
    }

    toggleForm = () => {
        this.setState({
            showingForm: !this.state.showingForm
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleForm}>Add Beer</button>
                {this.state.showingForm ? (
                <form onSubmit={this.addBeer}>
                    <label>Name</label>
                    <input onChange={this.handleChange} type="text" name="name" />
                    <br />
                    <label>Tagline</label>
                    <input onChange={this.handleChange} type="text" name="tagline" />
                    <br />
                    <label>Description</label>
                    <input onChange={this.handleChange} type="text" name="description" />
                    <br />
                    <label>First Brewed</label>
                    <input onChange={this.handleChange} type="text" name="first_brewed" />
                    <br />
                    <label>Brewers_Tips</label>
                    <input onChange={this.handleChange} type="text" name="brewers_tips" />
                    <br />
                    <label>Attunation Level</label>
                    <input onChange={this.handleChange} type="number" name="attunation_level" />
                    <br />
                    <label>Contributed By</label>
                    <input onChange={this.handleChange} type="text" name="contributed_by" />
                    <br />
                    <input type="submit" />
                </form>
                ) : (
                    ''
                )}
            </div>
        )
    }
}

export default NewBeer