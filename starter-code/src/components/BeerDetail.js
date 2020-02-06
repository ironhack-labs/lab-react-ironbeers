import React, {Component}  from 'react'
import BeerService from '../services/BeerService';
import Beer from './Beer';

class BeerDetail extends Component {
  state = {
    beer: null
  }

  

  componentDidMount() {
    
        BeerService.detail(this.props.match.params.beerId).then(response => {
          this.setState({ beer: response.data })
        })
      
  }

  render() {
    return (
      <article className="BeerDetail">
        
        {this.state.beer && <Beer { ...this.state.beer } />}
      </article>
    )
  }
}

export default BeerDetail