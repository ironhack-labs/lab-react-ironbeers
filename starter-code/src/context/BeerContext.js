import React, {Component} from 'react';
import axios from 'axios';

export const BeerContext = React.createContext();

export const withBeers = (Comp) => {
  return class WithBeers extends Component {
    render() {
      return (
        <BeerContext.Consumer>
          {({ beers }) => (
            <Comp beers={beers}/>
          )}
        </BeerContext.Consumer>
      );
    }
  };
};

export const withRandomBeer = (Comp) => {
  return class WithRandomBeer extends Component {

    getRandomBeer(beers) {
      const randomIndex = this.getRandom(0, beers.length);
        return beers[randomIndex];
    }
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
      return (
        <BeerContext.Consumer>
          {({ beers }) => (
            <Comp beer={this.getRandomBeer(beers)}/>
          )}
        </BeerContext.Consumer>
      );
    }
  };
};

export const withBeer = (Comp) => {

  return class WithBeers extends Component {

    getBeerById(beers, beerId) {
      return beers.filter(beer => beer._id === beerId);
    }

    render() {
      const {match : {params : {dataId = undefined} = {}} = {}} = this.props;
      return (
        <BeerContext.Consumer>
          {({ beers }) => (
            <Comp beer={this.getBeerById(beers, dataId)[0]}/>
          )}
        </BeerContext.Consumer>
      );
    }
  };
};


export class BeerProvider extends Component {

  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        this.setState({
          beers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {children} = this.props;
    return (
      <BeerContext.Provider value={{beers: this.state.beers }}>
        {children}
      </BeerContext.Provider>
    );
  }
}

export default BeerContext;