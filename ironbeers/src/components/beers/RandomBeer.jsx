import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {randomBeer} from '../../services/beersApi'

export default class RandomBeer extends Component {
    state = {
        beer: []
    }

    componentDidMount(){
        randomBeer()
        .then(beer => {
            this.setState({beer})
        })
        .catch(e=>console.log(e))
    }

  render() {
      const {beer} = this.state
    return (
      <div>
        <Link to="/">
            <button className="buttonFull">
                <img style={{width:"40px"}} src="/homeIcon.svg" alt="homeicon"/>
            </button>
        </Link>
        {beer.map((beer, index)=> 
        <div key={index} className="card-columns">
            <img style={{width:"140px"}} className="card-img-top" src={beer.image_url} alt="Card cap"/>
            <div className="card-body">
                <div className="card-text">
                    <h2>{beer.name}</h2>
                    <p>{beer.description}</p>
                    <small>{beer.contributed_by}</small>
                </div>
            </div>
        </div>
        )}
        
        </div>

    )
  }
}



