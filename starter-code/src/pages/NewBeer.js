import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'
import { createBeer } from '../services/beers'

class CreateBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    submit = async event => {
        event.preventDefault()
        console.log(this.state)
        await createBeer(
            this.state.name,
            this.state.tagline,
            this.state.description,
            this.state.first_brewed,
            this.state.brewers_tips,
            Number(this.state.attenuation_level),
            this.state.contributed_by
        )
        this.props.history.push('/')
    }

    handleInput = ({ target: {name, value} }) => {
        this.setState({ [name]: value})
    }

    render() {
        return (
            <>
            <NavBar />
                <form onSubmit={this.submit}>
                    <div>
                        <label htmlFor="name">
                        Beer name:
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label htmlFor="tagline">
                        Beer Tagline
                        <input
                            type="text"
                            name="tagline"
                            id="tagline"
                            placeholder="tagline"
                            value={this.state.tagline}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label htmlFor="description">
                        Beer Description
                        <input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label htmlFor="first_brewed">
                        First Brewed
                        <input
                            type="text"
                            name="first_brewed"
                            id="first_brewed"
                            placeholder="first brewed"
                            value={this.state.first_brewed}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label htmlFor="brewers_tips">
                        Brewer Tips
                        <input
                            type="text"
                            name="brewers_tips"
                            id="brewers_tips"
                            placeholder="brewers tips"
                            value={this.state.brewers_tips}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label htmlFor='attenuation_level'>
                        Attenuation Level
                        <input
                            type='text'
                            name="attenuation_level"
                            id="attenuation_level"
                            placeholder="attenuation level"
                            value={this.state.attenuation_level}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label htmlFor='contributed_by'>
                        Contributed By
                        <input
                            type='text'
                            name="contributed_by"
                            id="contributed
                            _by"
                            placeholder="contributed by"
                            value={this.state.contributed_by}
                            onChange={this.handleInput}
                        />
                        </label>
                        <input type="submit" value="Create Beer" />
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(CreateBeer)