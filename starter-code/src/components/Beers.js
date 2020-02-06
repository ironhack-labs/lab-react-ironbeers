import React from 'react';
import BeerService from '../services/BeerService';
import Beer from './Beer';

class Beers extends React.Component {
  constructor() {
      super()
      this.state = {
        beers: [],
        search: ''
      }
      this.timeId = null
  }

  delay = fn => this.timeId = setTimeout(fn, 500)

  searchBeers = () => {
    BeerService.search(this.state.search).then(response => {
      this.setState({ beers: response.data.slice(0, 20)})
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      clearTimeout(this.timeId)
      this.delay(this.searchBeers)
    })
  }

  componentDidMount() {
    BeerService.list().then(response => {
        this.setState({ beers: response.data.slice(0, 20)})
        })
  }

  render() {

    return (
      <article className="Beers">
        <input className="form-control mb-3" value={this.state.search} onChange={this.handleChange} placeholder="Search..."/>

        {this.state.beers.map(beer => <Beer { ...beer } key={beer._id}/>)}
      </article>
    );
  }
}

export default Beers