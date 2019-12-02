import React from "react"
import axios from "axios"
import NavBar from "./NavBar"

class New extends React.Component {
    state= {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level: "",
        contributed_by: ""
    }

    handleChange = event => {
        console.log(event.target.value)
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

addNewBeer = event => {
    event.preventDefault();

const newBeer = {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewer_tips: this.state.brewer_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,

}


axios
.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
.then(response => {
    console.log(response.status)
})
    .catch(err => {
        console.log(err);
}) 

this.setState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewer_tips: "",
    attenuation_level: "",
    contributed_by: ""
})

}
render () {
    return(
        <div>
        <NavBar />
        <div>
            <form onSubmit={this.addNewBeer}>
                <label htmlFor="name">Name: </label>
                <input type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <label htmlFor="tagline">Tagline: </label>
                <input type="text"
                    id="tagline"
                    name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleChange}
                />

                <label htmlFor="description">Description: </label>
                <input type="text"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />

                <label htmlFor="first_brewed">First brewed: </label>
                <input type="text"
                    id="first_brewed"
                    name="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleChange}
                />

                <label htmlFor="brewer_tips">Brewer tips: </label>
                <input type="text"
                    id="brewer_tips"
                    name="brewer_tips"
                    value={this.state.brewer_tips}
                    onChange={this.handleChange}
                />

                <label htmlFor="attenuation_level">Attenuation level: </label>
                <input type="text"
                    id="attenuation_level"
                    name="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.handleChange}
                />

                <label htmlFor="contributed_by">Contributed by: </label>
                <input type="text"
                    id="contributed_by"
                    name="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleChange}
                />

                <button type="submit">Add a New Beer</button>
            </form>
            </div>
        </div>
    )
}

}

export default New;