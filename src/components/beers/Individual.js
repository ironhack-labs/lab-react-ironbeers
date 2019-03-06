import React, { Component } from 'react'
import { detailBeer } from '../../services/BeerService'
import Detail from '../beers/Detail'


export default class Individual extends Component {
  state = {
    beer : []
  }

  componentDidMount = () => {
    detailBeer(this.props.match.params.id)
      .then(response => {this.setState({ beer: response.data })},
      err => {if(err){
        this.setState({
          error: true
        })
      }}
     ) 
  }

  render = ()=> {
    return(
      <div>
        <Detail {...this.state.beer}></Detail>
      </div>
      
    )
  }
}




