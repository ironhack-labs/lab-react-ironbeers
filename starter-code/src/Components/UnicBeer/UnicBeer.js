import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UnicBeer extends Component {
    constructor(props){
        super(props);
        this.state = {};
        }
      
        componentDidMount(){
            this.getSingleBeer();
        }
        getSingleBeer = () => {
            const { params } = this.props.match;

            axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
            .then( resApi =>{
                const theBeer = resApi.data;
                console.log(theBeer)
                this.setState(theBeer);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
  render() {
    return(
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.tagline} </p>
            <img src={`${this.state.image_url}`} style={{width:'10%'}}></img>
            <h5>{this.state.contributed_by}</h5>
        </div>
      )
    }
}
