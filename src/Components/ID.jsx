import React, { Component } from 'react';
import axios from "axios";
import Details from './Details';

export class ID extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            beer: null,
        };
    }

    componentDidMount() {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then((response) => {
                // console.log(response);
                // With axios, your response data will always be at
                // response.data
                this.setState({ beer: response.data });
                console.log(this.state.beer);

                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.beer === null) {
            return <div>Loading....</div>;
        }
        return (
            <div>
                <Details biere={this.state.beer}/>
            </div>
        )
    }
}

export default ID;
