import React, { Component } from 'react';
import BeerDetails from '../../components/BeerDetails/BeerDetails';
import Header from '../../components/Header/Header';
import BeersService from '../../services/beers.service';

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randombeer: {},
    };

    this.BeersService = new BeersService();
  }

  componentDidMount(){
    this.getRandomBeer()
  }

 getRandomBeer = () => {
   console.log(this.state.randombeer)
   this.BeersService
   .getRandom()
   .then(({data}) => {
     this.setState({randombeer:data})
   })
   .catch((err) => console.error(err))
 }
  

  render() {
    return (
      <div>
        <Header />
        <BeerDetails 
          {...this.state.randombeer}
        />
      </div>
    );
  }
}
