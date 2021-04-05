import React, { Component } from 'react';

//components
import BeerCard from '../../BeerCard/BeerCard'
import Loader from "react-loader-spinner";

const axios = require('axios');


class BeerDetail extends Component {

    state = {
        loading: true,
        beer:null
    }

    getBeerDetail (){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.props.match.params.beerId}`)
        .then( response => {
          this.setState({
              beer: response.data,
              loading: false
            })
          })
        .catch( error => console.log(error))
    }


    componentDidMount() {
        this.getBeerDetail()
      }

    render() {

        return (
            <div className="BeerDetailContainer">
                {this.state.loading ?
                (<div className="container-fluid m-5">
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                </div>)
                :
                    <BeerCard beer={this.state.beer}/>
                }
            </div>
        );
    }
}

export default BeerDetail;