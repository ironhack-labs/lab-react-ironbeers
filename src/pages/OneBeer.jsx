import React, { Component } from 'react';
import BeerAPI from '../api/beerApi';
import SingleBeer from '../components/SingleBeer.jsx';

export default class OneBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: {},
        };
    }

componentDidMount() {
    BeerAPI.getOneBeer(this.props.match.params.id)
        .then((apiResponse) => {
            console.log(apiResponse.data);
            this.setState({ beer: apiResponse.data });
          })
          .catch((apiError) => {
            console.log(apiError);
          });
      }
    


    render() {
        return (
            
            <div>
            {this.state.beer && (<SingleBeer beer={this.state.beer}/>)}
            </div>
        )
    }
}
