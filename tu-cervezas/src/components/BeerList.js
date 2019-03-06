import React, { Component } from 'react';
import BeerListItem from './BeerListItem';
const apiEndpoint = "https://ironbeer-api.herokuapp.com/beers";

class BeerList extends Component {

  state = {
    listOfBeers : []
  };

  getAllBeers = () => {
    fetch(`${apiEndpoint}/all`)
      .then(res => {
        res.json()
          .then(obj => {
            this.setState({listOfBeers: obj});
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    console.log(this.state.listOfBeers);
    return (
      <div className="beer-list">
        {
          this.state.listOfBeers.map((el, i) => {
            return (
              <BeerListItem key={i} {...el}/>
            );
          })
        }

        {/* <button onClick={console.log(this.state.listOfBeers)}>Beers!</button> */}
      </div>
    );
  }
}

export default BeerList;
