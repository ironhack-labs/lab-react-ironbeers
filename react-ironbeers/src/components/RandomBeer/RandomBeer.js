import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ('../BeerDetail/BeerDetail.css');
export default class RandomBeer extends Component {
    constructor(props){
          super(props);
          this.state={
              RandomBeer: null
          }

    }

    componentDidMount(){
        this.getRandomBeer();
    }

    getRandomBeer =()=>{
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then(resBeerFromApi => {
          console.log(resBeerFromApi.data);
          this.setState({ ...this.state, RandomBeer: resBeerFromApi.data });
        });
    }

  render() {
    if(this.state.RandomBeer){
        console.log(this.state.RandomBeer[0]);
        return (
            <div>
            <Link to="/">HOME</Link>
            <div  className='beer-detail-box'>
                <img style={{maxWidth: '60px'}} src={this.state.RandomBeer[0].image_url} alt=""/>
                <h1>{this.state.RandomBeer[0].name}</h1><span>{this.state.RandomBeer[0].attenuation_level}</span>
                <span>{this.state.RandomBeer[0].tagline}</span><span>{this.state.RandomBeer[0].first_brewed}</span>
                <p>{this.state.RandomBeer[0].description}</p>
                <span>Contributed_by: {this.state.RandomBeer[0].contributed_by}</span>
            </div> 
            </div>
        )
    }else{
        return (
            <h1>Loading Selected Beer...</h1>
        )
    }
  }
}
