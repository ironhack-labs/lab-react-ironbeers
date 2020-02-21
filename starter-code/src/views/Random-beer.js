import React, { Component } from 'react';
import axios from "axios"; //  npm i axios

export default class RandomBeer extends Component {
    state = {
        beers: [],
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers",
        oneBeer: []
    };

    componentDidMount() {
        axios
            .get(this.state.APIEndpoint)
            .then(apiRes =>  {
                let min= 0;
                let max =  apiRes.data.length;
                let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
                this.setState({ oneBeer: apiRes.data[randomValue] });
                console.log(apiRes.data[randomValue]);
            })

            .catch(apiErr => console.error(apiErr));

    }

    render() {

        return  (

            <div className="page">
                <h1 className="title">Beer</h1>
                <div className="beer1">
                    <div  className="beer11"> <img src={this.state.oneBeer.image_url} className="img-beer" /> </div>
                    <div  className="beer12">
                        <ul>
                            <li>
                                {this.state.oneBeer.name}
                            </li>
                            <li>
                                {this.state.oneBeer.tagline}
                            </li>
                            <li>
                                {this.state.oneBeer.contributed_by}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )


    }
}



