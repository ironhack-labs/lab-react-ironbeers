import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class BeerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getBeer = this.getBeer.bind(this)

    }

    getBeer() {
        const { params } = this.props.match;
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then(response => {
                const oneBeer = response.data;
                this.setState(oneBeer);
                // console.log(this.state)
            })
        .catch((error) => console.log(error))
    }

    componentDidMount() {
        this.getBeer();
      }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="body-one">
                    <div className="img-one">
                        <img src={this.state.image_url} alt=""/>
                    </div>
                    <h3>{this.state.name}</h3>
                    <h3>{this.state.tagline}</h3>
                    <h3>{this.state.description}</h3>
                    <h3>{this.state.first_brewed}</h3>
                    <h3>{this.state.attenuation_level}</h3>
                    <h3>{this.state.brewers_tips}</h3>
                    <h3>{this.state.contributed_by}</h3>
                </div>

            </div>
        );
    }
}
export default BeerDetails;
