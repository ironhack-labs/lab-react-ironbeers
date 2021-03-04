import axios from 'axios';
import React, { Component } from 'react';

class Search extends Component {
  state = {
    searchedBeer: [],
  };

  // handleChange = (e) => {
  //     console.log(e.target.value, e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  search = (e) => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          searchedBeer: response.data,
        })
    

      });
  };

  searchForBeer = () => {
      if (this.state.searchedBeer.length>0){
          return this.state.searchedBeer.map((each) => {
                  return (
                    <div>
                      <img src={each.image_url} alt={each.name} width="50vw" />
                      <h2>{each.name}</h2>
                      <p>{each.tagline}</p>
                      <p>{each.contributed_by}</p>
                    </div>
                  );
          });
    }else return <div>That beer doesn' exist in our database</div>
  };

  render() {
    return (
      <div className={'searchResults'}>
        <input className={'input'}
          onChange={this.search}
          name="name"
          placeholder="search"
          type="text"
        />

        <div>{this.searchForBeer()}</div>
      </div>
    );
  }
}

export default Search;
