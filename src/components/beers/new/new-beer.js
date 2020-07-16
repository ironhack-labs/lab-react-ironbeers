import React, {Component} from 'react'

class New extends Component {
    constructor (){
        super ()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addBeer(this.state)
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        })
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }


    render () {
        return (
            <form onSubmit={this.handleFormSubmit}>

            <label>
                Name:
                <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label> <br></br>

            <label>
                Tagline:
                <input name="tagline" type="text" value={this.state.tagline} onChange={this.handleInputChange} />
            </label><br></br>

            <label>
                Description:
                <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
            </label><br></br>

            <label>
                First Brewed: 
                <input name="first_brewed" type="text" value={this.state.first_brewed} onChange={this.handleInputChange} />
            </label><br></br>

            <label>
                Attenuation Level:
                <input name="attenuation_level" type="number" value={this.state.attenuation_level} onChange={this.handleInputChange} />
            </label><br></br>

            <label>
                Contributed by:
                <input name="contributed_by" type="text" value={this.state.contributed_by} onChange={this.handleInputChange} />
            </label><br></br>

            <button>Save the Beer :D</button>
        </form>
        )
    }
}

export default New