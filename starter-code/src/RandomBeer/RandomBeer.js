import React from "react";
import Beers from '../Beers/Beers.js'
import axios from 'axios';




export default class ListOfBeers extends React.Component {

    state = {
        listofBeers: [],
        newBeer: 0
    }

    componentDidMount = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(responseFromApi => {
                console.log(responseFromApi.data)
                this.setState({
                    newBeer: responseFromApi.data
                })
                console.log(this.state.newBeer)
            })
    }

    render() {
        return (
            <div className="list">
                    <Beers _id={this.state.newBeer._id} image_url={this.state.newBeer.image_url} description={this.state.newBeer.description} name={this.state.newBeer.name} tagline={this.state.newBeer.tagline}></Beers>
            </div>
        )
    }
}

