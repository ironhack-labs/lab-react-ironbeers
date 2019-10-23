import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';


class BeerDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          theBeer: {}
        };
    }
  
    componentDidMount(){
        this.getSingleBeer();
    }
  
    getSingleBeer = () => {
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${params.id}`)
        .then( responseFromApi =>{
            const theBeer = responseFromApi.data;
            console.log(theBeer)
            this.setState({theBeer});
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  render() {
    return (
      <div>
         <Navbar />
         <div className='container-detail'>
            <img className='img-detail' src={this.state.theBeer.image_url}/>
            <h2>{this.state.theBeer.name}</h2>
            <p>{this.state.theBeer.tagline}</p>
            <p>{this.state.theBeer.description}</p>
            <sub>created by: {this.state.theBeer.contributed_by}</sub>
            <Link className='btn-detail' to={'/beers'}>Back to all beers</Link>
        </div>
      </div>
    );
  }
}

export default BeerDetail;