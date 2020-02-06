import React from 'react'
import BeerService from '../services/BeerService';
import Beer from './Beer';

class RandomBeer extends React.Component {
  state = {
    beer: null
  }

  componentDidMount() {
    BeerService.random().then(response => {
        this.setState({ beer: response.data })
      })
  }

  render() {
    return (
      <article className="RandomBeer">
        {this.state.beer && <Beer {...this.state.beer} detail={true} />}
      </article>
    )
  }
}

export default RandomBeer