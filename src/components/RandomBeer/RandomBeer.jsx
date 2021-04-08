import React from 'react';
import './RandomBeer.css'
import NavBar from '../NavBar/NavBar'
import DetailCard from '../DetailCard/DetailCard'
import {Link} from "react-router-dom"
import { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component  {

    state = {
        randomData: null,
        loadingRandom: true,
        newRequest: false
    }
    getRandomData(){
        
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(res => {
            const gottenData = res.data
            this.setState({
                randomData: gottenData,
                loadingRandom: false
                } 
            )
        })  
        .catch((e) => console.log(e))
        
    }



    componentDidMount(){
        this.getRandomData()

    }

   

    render(){
        return (
            <div className='RandomBeer'>
                <NavBar />
                <Link to="/random" ></Link>
                {this.state.loadingRandom ? (<h1>Loading...</h1>):(
                    <DetailCard data={this.state.randomData}/> 
                    )
                }
                 
            </div>
        );
    }
};

export default RandomBeer;