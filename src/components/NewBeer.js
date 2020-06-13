import React, { Component } from 'react'
import axios from 'axios'

class NewBeer extends Component {
    
    state = {
        name : "",
        tagline : "",
        description : "",
        first_brewed : "",
        brewers_tips : "",
        attenuation_level : 0,
        contributed_by : ""
    }

    changeHandler = (event) => {
        let inputValue = event.target.value
        let inputName = event.target.name

        let obj = {}
        obj[inputName] = inputValue


        this.setState(obj)
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state).then(() => {
            console.log("new beer saved")
            this.setState({
                name : "",
                tagline : "",
                description : "",
                first_brewed : "",
                brewers_tips : "",
                attenuation_level : 0,
                contributed_by : ""
            })
        })

    }


    render () {
        return(
            <div>
                <form onSubmit={this.formSubmitHandler}>
                Name:<input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/> <br />
                TagLine<input type="text" name="tagline" value={this.state.tagline} onChange={this.changeHandler} /> <br />
                Description<input type="text" name="description" value={this.state.description} onChange={this.changeHandler}/> <br />
                First brewed<input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.changeHandler}/> <br />
                Brewers tips<input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.changeHandler}/> <br />
                Attenuation level<input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.changeHandler} /> <br />
                Contributed by<input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.changeHandler}/> <br />
                <button type="submit"> Add new beer</button>
                </form>
            </div>
        )
    }
}

export default NewBeer