import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Beers extends Component {

  state = {
    search: '',
  }

  searchBeer = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  printFilteredBeers = () => {
    const {beers} = this.props;
    const { search } = this.state;
                           
    if (search === '') {
      return beers.map((item, index) => {
        return this.individualBeer(item, index);
      })
    } else {
      return beers.map((item, index) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return this.individualBeer(item, index);
        } 
      })
    }
  }

  individualBeer = (item, index) => {
    return <Link key={index} className='beer-link' to={`/beers/${item._id}`}>
              <div className='beer-box' >
                <img className='beer-img' src={item.image_url} alt=""/>
                <div className='beer-description-box'>
                  <h2>{item.name}</h2> 
                  <p>{item.tagline}</p>
                  <p>Created by: {item.contributed_by}</p> 
                </div>
              </div>
              <hr/>
            </Link>
  }

  render() {
   return (
     <div>
      <Header />
      <input className="search-input" onChange={this.searchBeer} placeholder="Search your Beer here..." type="text"/>
      {this.printFilteredBeers()}
     </div>
    )
  }
}

export default Beers;