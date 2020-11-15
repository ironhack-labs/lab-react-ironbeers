import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'



export default class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewersTips: "",
        attenuationLevel: 0,
        contributedBy: "",
    }

    handleChange (event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    async handleSubmit() {
        const addNewBeerToApi = await axios.post("https://api.punkapi.com/v2/beers/new", {...this.state})
    }



    componentDidMount = async () => {
        const randomBeerFromApi = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new")
        // axios devuelve un objeto con la respuesta dentro de "data"
        this.setState({ randomBeer: randomBeerFromApi.data })
        console.log(this.state.randomBeer, 'random')
    }

    render() {
        return (
            <div>
                <Header />
                <div className="new-beer">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onChange={(event) => this.handleChange(event)} />
                        <label htmlFor="">Tagline</label>
                        <input type="text" name="tagline" onChange={(event) => this.handleChange(event)} />
                        <label htmlFor="">Description</label>
                        <textarea type="textarea" name="description" onChange={(event) => this.handleChange(event)} />
                        <label htmlFor="" >First Brewed</label>
                        <input type="text" name="firstBrewed" onChange={(event) => this.handleChange(event)} />
                        <label htmlFor="" >Brewers Tips</label>
                        <input type="text" name="brewersTips" onChange={(event) => this.handleChange(event)} />
                        <label htmlFor="">Attenuation Level</label>
                        <input type="text" name="attenuationLevel" onChange={(event) => this.handleChange(event)} />
                        <label htmlFor="">Contributed by</label>
                        <input type="text" name="contributedBy" onChange={(event) => this.handleChange(event)} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
