import React, { Component } from 'react'
import { getSingle } from '../../services/api';
import { Link } from 'react-router-dom'

class SingleBeer extends Component {

  state={
    beer:{}
  }

  componentWillMount(){
    const { id } = this.props.match.params
    getSingle(id)
    .then(beer=>{
      this.setState({beer})
    }).catch(e=>{
      console.log(e)
    })
  }

  render() {
    const {beer} = this.state
    return (
      <div>
        <Link to="/" className="btn btn-primary" style={{width:"100vw"}}>Home</Link>
        <div className="d-flex justify-content-center">
          <div className="card col-md-6">
            <div className="align-items-center">
              <img className="card-img-top" style={{maxWidth:"20%"}} src={beer.image_url} alt="Beer pic"/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{beer.name}</h5>
              <p className="card-text">{beer.tagline}</p>
              <p className="card-text">{beer.description}</p>
              <Link to="/all" className="btn btn-primary">Go back</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleBeer