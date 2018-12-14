import React, { Component } from 'react'
import { getAll } from '../../services/api';
import BeerCard from './BeerCard';
import { Link } from 'react-router-dom'

class AllBeers extends Component {

  state={
    beers:[]
  }

  componentWillMount(){
    getAll()
    .then(beers=>{
      this.setState({beers})
    })
    .catch(e=>console.log(e))
  }

  render() {
    const {beers} = this.state
    return (
      <div>
        <Link to="/" className="btn btn-primary" style={{width:"100vw"}}>Home</Link>
        <div className="row">
          {beers.map(b=>{
            return (
              <div className="col-lg-4 col-md-6">
                <BeerCard key={b._id} id={b._id} title={b.name} imageURL={b.image_url} description={b.tagline} contributed_by={b.contributed_by}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AllBeers