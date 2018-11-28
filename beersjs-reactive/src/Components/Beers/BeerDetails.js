import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import BeerItem from './BeerItem';

class BeerDetail extends Component {

  constructor(){
    super();
    this.state = {
      beer:{}
    }
  }

  componentWillMount(){
    const base_url = 'https://ironbeer-api.herokuapp.com/beers'

    axios.get(`${base_url}/single/${this.props.match.params.id}`)
      .then(res =>{
        this.setState({beer: res.data})
        //console.log('State =====>', this.state.beer)
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
        <BeerItem key={beer._id} {...beer}/>
      </section>
    )
  }
}

export default BeerDetail;