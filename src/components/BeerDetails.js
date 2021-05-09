import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class BeerDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            details: {},
        }
    }

    componentDidMount(){
        const thisId = this.props.match.params.id;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${thisId}`)
        .then(response => {
            this.setState({details: response.data})
        })
    }

    render(){
        console.log(this.state.details);
        return(
            <div>
                <Header />
                <div>
                    <div><img src={this.state.details.image_url}/></div>
                    <div>{this.state.details.name}</div>
                    <div>{this.state.details.tagline}</div>
                    <div>{this.state.details.first_brewed}</div>
                    <div>{this.state.details.attenuation_level}</div>
                    <div>{this.state.details.description}</div>
                    <div>{this.state.details.contributed_by}</div>
                </div>
            </div>
        )
    }
}

export default BeerDetails;