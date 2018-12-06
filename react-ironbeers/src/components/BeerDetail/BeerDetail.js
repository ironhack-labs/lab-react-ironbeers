import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ('./BeerDetail.css');
export default class BeerDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            OneBeer: null
        }
  
    }

    componentDidMount(){
        this.getOneBeer();
    }

    getOneBeer =()=>{
        console.log(this.props.match.params.beerId,"dentro de getOneBeer");
        const id = this.props.match.params.beerId;
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
        .then(resBeerFromApi => {
          console.log(resBeerFromApi.data);
          this.setState({ ...this.state, OneBeer: resBeerFromApi.data });
        });
    }


  render() {
      if(this.state.OneBeer){
        return (
           <div>
        
            <Link to="/">HOME</Link>
            
            <div  className='beer-detail-box'>
                <img style={{maxWidth: '60px'}} src={this.state.OneBeer.image_url} alt=""/>
                <h1>{this.state.OneBeer.name}</h1><span>{this.state.OneBeer.attenuation_level}</span>
                <span>{this.state.OneBeer.tagline}</span><span>{this.state.OneBeer.first_brewed}</span>
                <p>{this.state.OneBeer.description}</p>
                <span>Contributed_by: {this.state.OneBeer.contributed_by}</span>
            </div> 
           </div>
          )
      }else{
        return (
            <h1>Loading Beer...</h1>
        )
      }
  
  }
}
