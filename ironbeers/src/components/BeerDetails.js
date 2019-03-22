import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class BeerDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            beer: []
        }
        console.log(props)
    }

    componentDidMount() {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
        .then(response => {
            // console.log(response)
            this.setState({beer: response.data})
        })
    }


  render() {
    return (
      <div>
        { <div className="BeerDetail">
        <p className="title">{this.state.beer.name}</p>
        <p className="tagline">{this.state.beer.tagline}</p>
        <p className="first-brewed">{this.state.beer.first_brewed}</p>
        <p className="description">{this.state.beer.description}</p>
        <p className="contributor">{this.state.beer.contributed_by}</p>
        <Link to={`/beer/${this.state.beer._id}`} ><img src= {this.state.beer.image_url} alt="beers" /></Link>

      </div> }
      </div>
    )
  }
}
