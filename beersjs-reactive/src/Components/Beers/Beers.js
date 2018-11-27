import React, {Component} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import BeerListItem from './BeerListItem';

class Beers extends Component{
  
  constructor(){
    super();
    this.state = {
      beers:[]
    }

  }
  
  componentWillMount(){
    const base_url = 'https://ironbeer-api.herokuapp.com/beers'

    axios.get(`${base_url}/all`)
      .then(res =>{
        this.setState({beers: res.data})
        console.log('State =====>', this.state.beers)
      })
      .catch(err => {
        console.log('Error =====>', err)
      });
  }

  render(){
    const {beers} = this.state;
    return (
      <section>
        <Header />
        {beers.map(beer => <BeerListItem key={beer._id} {...beer}/>)}
      </section>
    )
  }
}

export default Beers;