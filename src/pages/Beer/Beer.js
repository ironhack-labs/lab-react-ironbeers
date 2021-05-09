import React, { Component } from 'react';
import BeerDetails from '../../components/BeerDetails/BeerDetails';
import Header from '../../components/Header/Header';
import BeersService from '../../services/beers.service';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };

    this.BeersService = new BeersService();
  }

  componentDidMount(){
    this.BeersService.getOne()
    .then(res => {
        console.log(res.data);
        this.setState({beer: res.data})
    })
    .catch(err => console.error(err))
  }

 getBeer = () => {
   this.BeersService
   .getOne(this.props.match.params.id)
   .then(({data}) => {
     this.setState({beer:data})
   })
   .catch((err) => console.error(err))
 }
  

  render() {
    return (
      <div>
        <Header />
        <BeerDetails />
        {this.getBeer()}
      </div>
    );
  }
}
