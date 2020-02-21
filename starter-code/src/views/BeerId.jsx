import React, {Component} from "react";
import axios from "axios";
import "./../styles/BeerId.css";

export default class Beers extends Component {
    state = {
        beer: [],
        api: "https://ih-beers-api2.herokuapp.com/beers/"+this.props.match.params.id
    }

    componentDidMount() {
        axios
        .get(this.state.api)
        .then(apiRes => this.setState({ beer: apiRes.data }))
        .catch(apiErr => console.error(apiErr));
    }

    render() {
        return(
            <section className="page beerId-page">
                <h1>{this.state.beer.name}</h1>
                <div className="beerId-box">
                    <div className="beerId-img">
                        <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                    </div>
                    <div className="beerId-info">
                        <p>{this.state.beer.tagline}</p>
                        <p>First brewed in : {this.state.beer.first_brewed}</p>
                        <p>Attenuation level : {this.state.beer.attenuation_level}</p>
                        <p>{this.state.beer.description}</p>
                        <p>Created by : {this.state.beer.contributed_by}</p>
                    </div>
                </div>
            </section>
        )
    }
}