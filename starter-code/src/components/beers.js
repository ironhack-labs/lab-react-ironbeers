import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class beers extends Component {

    constructor() {
        super();
        this.state = {
            beers: []
        }
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({beers: response.data})
            })
    }

    render() {
        return (
            <div ClassName="ImportantDivForReturnOtherwiseItWontWorkForWhateverReason">
            {
                this.state.beers.map((beer, index) => 
                    <div key={index} ClassName="Beers">
                        <div ClassName="Infos">
                            <Link to={`/beers/:beerId`} ClassName="BeerDetails"> {beer.name} </Link><br/>
                            {beer.tagline}<br/>
                            Created by: <b>{beer.contributed_by.split(" ").slice(0, 2).join(' ')}</b><br/>
                        </div>

                        <div ClassName="Image">
                            <img src={beer.image_url} alt="NoPic" />
                        </div>
                    </div>
                    
                    
                )
            }
            </div>        
        )
    }
}
