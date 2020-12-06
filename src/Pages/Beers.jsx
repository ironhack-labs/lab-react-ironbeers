import React, { Component } from 'react';
import './Beers.css'
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';

export default class Beers extends Component {
   
    state = {
        isLoading:true, data:null
    }

    componentDidMount = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((responseBack) => {
          console.log('reponseback', responseBack.data);
          this.setState({ isLoading: false, data: responseBack.data });
        });
    }


    render() {
        if(this.state.isLoading){return (<div>Loading . . .</div>)}

        return(
        <div className="container">

                 
                {this.state.data.map((el) => (
                    <div className="beer-box">
                        <img src={el.image_url} />
                        <div className="text-box">
                           <Link to={`/${el._id}`}> <h1>{el.name}</h1></Link>
                            <h2>{el.tagline}</h2>
                            <p><b>Created by: </b>{el.contributed_by} </p>
                        </div>
                    
                    </div>))}
           
        </div>
        )
    
}}
