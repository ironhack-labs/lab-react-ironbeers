import React, { Component } from 'react'
import axios from 'axios';
import BeerInfo from './BeerInfo'
import {Link} from 'react-router-dom';
import {API_URL} from '../config';

export default class RandomBeer extends Component {
    state ={
        randomBeer:{}
    }
    componentDidMount(){
        axios.get(`${API_URL}/beers/random`)
            .then((res)=>{
                this.setState({
                    randomBeer: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <Link to={'/home'}><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' width ='100%'/></Link>
                <BeerInfo beer ={this.state.randomBeer}/>
            </div>
        )
    }
}
