import React, { Component } from 'react';
import DetailBeer from './../../shared/detailBeer/DetailBeer'
import BeerService from './../../../service/beersApi'

class SingleBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.BeerService = new BeerService();
    }

    componentDidMount = () => this.getBeerData()

    getBeerData() {
        this.BeerService.getBeerById(this.props.match.params.beerId)
           .then((response) => this.setState(response.data))
           .catch((err) => console.log(err));
       }
    
    
    render() {
        return (
            <DetailBeer {...this.state} {...this.props} />
            )
        }
} 
    
export default SingleBeer
    