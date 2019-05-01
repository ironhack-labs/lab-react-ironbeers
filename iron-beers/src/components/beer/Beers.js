import React, {Component} from 'react';
import axios from 'axios';
import Beer from './Beer';
import BeerFilter from './BeerFilter';

class Beers extends Component {
    constructor(props){
        super(props)
        this.state = {
            beers: []
        }
    }
    componentDidMount(){
        axios.get(`https://api.punkapi.com/v2/beers`)
        .then(responseFromApi => {
          this.setState({
            beers: responseFromApi.data
          })
        })
    
    }

    getSearchValue = (value) => {
      const searchBeer = value.toLowerCase();
      axios.get(`https://api.punkapi.com/v2/beers?name=${searchBeer}`)
        .then(responseFromApi => {
          this.setState({
            beers: responseFromApi.data
          })
        })
    }

  render(){
      const {beers} = this.state;

    return (
      <div className="container">
      <div className="m-10">
          <BeerFilter search={this.getSearchValue}/>
          {beers.map(beer => <Beer key={beer.id} {...beer} detail={`/beers/${beer.id}`} />)}
          </div>
      </div>
    );
  }
}

export default Beers;
