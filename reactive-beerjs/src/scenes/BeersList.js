import React, { Component, Fragment } from 'react'
import IronBeers from '../services/IronBeersService'
import Beer from '../component/Beer';
import IronBeersService from '../services/IronBeersService'

class BeersList extends Component {

  state = {
    searchText:'',
    listedBeers:[],
    searchBeers:[],
  }

  componentDidMount() {
    IronBeers.BeerList()
      .then( 
        beers => {
          const listedBeers = beers.slice(0,20)
          this.setState({ listedBeers, searchBeers: listedBeers })
        })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    IronBeersService.filterBeer(this.state.searchText)
      .then(searchBeers => {
        this.setState({ searchBeers })
      },
      error => console.error(error)
      )
  }

  render() {
     return this.state.searchBeers.length === 'undefined' ? null : (
      <Fragment>
        <form className='container mt-3 mb-3'>
          <input type="text" name='searchText' className="form-control" value={this.state.searchText} onChange = {this.handleChange}/>
        </form>
        { this.state.searchBeers.map((e,i) => <Beer beer={e} key={i}/>)}
      </Fragment>    
    )
  }
}

export default BeersList