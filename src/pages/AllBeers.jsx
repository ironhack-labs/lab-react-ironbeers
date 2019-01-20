import React, { Component } from 'react';
import BeerDetail from '../components/BeerDetail';
import Container from '../components/Container';
import Waiting from '../components/Waiting';
import FormField from '../components/FormField';

import { getBeers } from "../lib/beerApi";


export default class AllBeers extends Component {
  constructor(){
    super();
    this.state = {
      beers: null,
      filterBeers: null,
      search: '',
    }
  }
  componentDidMount(){
    getBeers('all').then(beers => {
      this.setState({beers, filterBeers: beers});
    })
  }
  // handleSearch(e) {
  //   let filterBeers = this.state.beers.filter(b => b.name.toUpperCase().includes(e.target.value.toUpperCase()));
  //   this.setState({
  //     search: e.target.value || '',
  //     filterBeers
  //   });
  // }
  handleSearch(e) {
    if (e.target.value !== "") {
      getBeers(`search?q=${e.target.value}`).then(filterBeers => this.setState({filterBeers}));
    } else if (e.target.value === "") {
      this.setState({filterBeers: this.state.beers});
    }
    this.setState({search: e.target.value || ''});
  }
  render() {
    const {filterBeers} = this.state;
    return (
      <Container className="allBeersBox">
        <FormField type="text" placeholder="Search for a beer..." onChange={(e)=>this.handleSearch(e)} value={this.state.search}/>
        {filterBeers ?
          (filterBeers.length < 1 ?
            <Waiting message="There're no beers with that name, please try another one. ;)"/>
            : filterBeers.map(b => <BeerDetail key={b._id} id={b._id} img={b.image_url} name={b.name} tagline={b.tagline} created={b.contributed_by}/>))
          : <Waiting message="Please wait until the beers have been thrown. ;)"/>
        }
      </Container>
    );
  }
}
