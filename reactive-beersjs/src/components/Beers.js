import React, { Component } from 'react';
import BeerCard from './BeerCard';
import NavBar from './NavBar';
import Search from './Search';

class Beers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filteredBeers: [...this.props.location.state.beersData],
    }
  }

  searchHandler(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
    this.filterHandler(value)
  }

  filterHandler(str) {
    const filter = [...this.props.location.state.beersData].filter((e) => {
      return e.name.includes(str)
    });
    this.setState({
      filteredBeers: filter,
    })
  }

  render() {
    return(
      <div>
        <NavBar />
        <Search search={this.state.search} searchChange={(event) => this.searchHandler(event)} />
        {
          this.state.filteredBeers.map((e, i) => {
            return <BeerCard key={i} beer={e} />
          })
        }
      </div>
    )
  }
}

export default Beers;
