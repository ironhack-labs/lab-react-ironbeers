import React, {Component} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import BeerItem from '../Beers/BeerItem';


class RandomBeer extends Component {
  
  constructor(){
    super();
    this.state = {
      beer:{}
    }
  }

  componentWillMount(){
    const base_url = 'https://ironbeer-api.herokuapp.com/beers'

    axios.get(`${base_url}/random`)
      .then(res =>{
        this.setState({beer: res.data[0]})
        console.log('State =====>', this.state.beer)
      })
      .catch(err => {
        console.log('Error =====>', err)
      });
  }

  render(){
    const {beer} = this.state;
    return(
      <section>
        <Header />
        <BeerItem key={BeerItem._id} {...beer}/>
      </section>
    )
  }
}

export default RandomBeer;