import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Header from "./Components/Header/Header.js"


class EachBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eachBeer: null
        }
    }
    getBeerInfo = () => {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
            .then(responseFromApi => {
                // console.log(responseFromApi.data.params)
                this.setState({
                    eachBeer: responseFromApi.data
                })
            })
    }
    componentWillMount() {
        this.getBeerInfo();
    }
    render() {
        console.log(this.props)
        // return (
        //     <Header></Header> 
        return this.state.eachBeer ?
            (<div>
                <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    <div style={{ width: '33%' }}>
                        <img src={this.state.eachBeer.image_url} style={{ width: '20%', height: '40%' }} />
                        <h1>{this.state.eachBeer.name}</h1>
                        <h2>{this.state.eachBeer.tagline}</h2>
                        <p>Created by: {this.state.eachBeer.name}</p>
                        <p>{this.state.eachBeer.contributed_by}</p>
                    </div>
                </div>
            </div>)
            :
            (
                <p>The IronBeers are on their way</p>
            )
        // )

    }
}

export default EachBeer;